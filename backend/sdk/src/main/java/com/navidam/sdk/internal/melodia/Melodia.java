package com.navidam.sdk.internal.melodia;

import javax.sound.midi.*;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class Melodia {

    private static final int PPQ = 480;
    private static final int VELOCITY = 100;

    private final List<Item> items = new ArrayList<>();
    private Instrumento instrumento = Instrumento.PIANO_ACUSTICO; // ajusta a tu enum
    private int bpm = 120;
    private int channel = 0;

    private String titulo;

    private record Item(Nota nota, Figura figura) {}

    public Melodia(String titulo) {
        this.titulo = titulo;
    }

    public Melodia instrumento(Instrumento inst) {
        this.instrumento = inst;
        return this;
    }

    public String titulo() {
        return titulo;
    }

    public Melodia tempo(int bpm) {
        this.bpm = bpm;
        return this;
    }

    public Melodia canal(int channel) {
        this.channel = channel;
        return this;
    }

    public Melodia nota(Nota n, Figura f) {
        items.add(new Item(n, f));
        return this;
    }

    public Melodia silencio(Figura f) {
        items.add(new Item(null, f));
        return this;
    }

    public Sequence toSequence() throws InvalidMidiDataException {
        Sequence seq = new Sequence(Sequence.PPQ, PPQ);
        Track track = seq.createTrack();

        addTempo(track, bpm);
        addProgramChange(track, channel, instrumento.getProgram(), 0);

        long tick = 0;
        for (Item it : items) {
            long dur = it.figura.ticks(PPQ);

            if (it.nota != null) {
                int note = it.nota.getMidi();
                addNote(track, channel, note, VELOCITY, tick, dur);
            }
            tick += dur;
        }

        addEndOfTrack(track, tick + 1);
        return seq;
    }

    public void escuchar() throws Exception {
        Synthesizer synth = MidiSystem.getSynthesizer();
        synth.open();

        Sequencer sequencer = MidiSystem.getSequencer(false);
        sequencer.open();
        sequencer.getTransmitter().setReceiver(synth.getReceiver());

        sequencer.setSequence(toSequence());
        sequencer.start();

        while (sequencer.isRunning()) Thread.sleep(30);

        sequencer.stop();
        sequencer.close();
        synth.close();
    }

    public void grabarMidi(String outputPath) throws Exception {
        Sequence seq = toSequence();
        MidiSystem.write(seq, 1, new File(outputPath));
    }

    public byte[] toBytes() throws Exception {
        Sequence seq = toSequence();
        try (ByteArrayOutputStream baos = new ByteArrayOutputStream()) {
            MidiSystem.write(seq, 1, baos);
            return baos.toByteArray();
        }
    }

    // --- helpers MIDI ---
    private static void addNote(Track t, int ch, int note, int vel, long start, long dur)
            throws InvalidMidiDataException {
        ShortMessage on = new ShortMessage();
        on.setMessage(ShortMessage.NOTE_ON, ch, note, vel);
        t.add(new MidiEvent(on, start));

        ShortMessage off = new ShortMessage();
        off.setMessage(ShortMessage.NOTE_OFF, ch, note, 0);
        t.add(new MidiEvent(off, start + dur));
    }

    private static void addProgramChange(Track t, int ch, int program, long tick)
            throws InvalidMidiDataException {
        ShortMessage pc = new ShortMessage();
        pc.setMessage(ShortMessage.PROGRAM_CHANGE, ch, program, 0);
        t.add(new MidiEvent(pc, tick));
    }

    private static void addTempo(Track t, int bpm) throws InvalidMidiDataException {
        int mpqn = 60_000_000 / bpm; // microsegundos por negra
        byte[] data = new byte[] {
                (byte)((mpqn >> 16) & 0xFF),
                (byte)((mpqn >>  8) & 0xFF),
                (byte)( mpqn        & 0xFF)
        };
        MetaMessage tempo = new MetaMessage();
        tempo.setMessage(0x51, data, 3);
        t.add(new MidiEvent(tempo, 0));
    }

    private static void addEndOfTrack(Track t, long tick) throws InvalidMidiDataException {
        MetaMessage end = new MetaMessage();
        end.setMessage(0x2F, new byte[0], 0);
        t.add(new MidiEvent(end, tick));
    }
}