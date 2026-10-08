
"use client";

import React, { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  CalendarDays,
  Check,
  Download,
  MapPin,
  Menu,
  ShieldCheck,
  Trophy,
  Users,
  X,
} from "lucide-react";

const ageGroups = [
  {
    age: "U7",
    label: "Little Stars",
    description: "A first taste of competitive football.",
  },
  {
    age: "U9",
    label: "Future Players",
    description: "Building confidence through competition.",
  },
  {
    age: "U11",
    label: "Young Talents",
    description: "More football. More challenge. More growth.",
  },
  {
    age: "U13",
    label: "Rising Players",
    description: "Where competitive football gets serious.",
  },
  {
    age: "U15",
    label: "Next Generation",
    description: "A platform for the next level.",
  },
  {
    age: "U17",
    label: "Elite Youth",
    description: "The final step before senior football.",
  },
];

const matches = [
  {
    date: "DEC 08",
    time: "09:00",
    category: "U13",
    home: "Ligi Ndogo",
    away: "Express Soccer",
    venue: "Jamhuri Stadium",
  },
  {
    date: "DEC 09",
    time: "11:30",
    category: "U15",
    home: "Runda Youth",
    away: "Kibera Stars",
    venue: "Upper Hill Turf",
  },
  {
    date: "DEC 10",
    time: "14:00",
    category: "U11",
    home: "Westlands Academy",
    away: "Karen Juniors",
    venue: "Jamhuri Stadium",
  },
];

const documents = [
  {
    title: "Tournament Participation Agreement",
    type: "PDF",
  },
  {
    title: "NEMIS & Age Verification Guidelines",
    type: "PDF",
  },
  {
    title: "Tournament Rules & Regulations",
    type: "PDF",
  },
  {
    title: "Medical Clearance Form",
    type: "PDF",
  },
];

export default function TournamentApp() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [teams, setTeams] = useState(2);
  const [players, setPlayers] = useState(12);

  const totalPlayers = teams * players;
  const total = totalPlayers * 2100;

  const closeMobile = () => setMobileOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#050706] text-white">
      {/* NAVIGATION */}
      <header className="absolute left-0 right-0 top-0 z-50">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <nav className="flex h-24 items-center justify-between border-b border-white/10">
            <a href="#home" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#00ff4f] text-black">
                <Trophy className="h-5 w-5" />
              </div>

              <div className="leading-none">
                <div className="text-sm font-black tracking-[0.18em]">
                  NAIROBI
                </div>

                <div className="mt-1 text-[10px] font-bold tracking-[0.28em] text-white/45">
                  JUNIOR CUP
                </div>
              </div>
            </a>

            <div className="hidden items-center gap-9 lg:flex">
              <a
                href="#tournament"
                className="text-sm font-medium text-white/65 transition hover:text-[#00ff4f]"
              >
                Tournament
              </a>

              <a
                href="#age-groups"
                className="text-sm font-medium text-white/65 transition hover:text-[#00ff4f]"
              >
                Age Groups
              </a>

              <a
                href="#fixtures"
                className="text-sm font-medium text-white/65 transition hover:text-[#00ff4f]"
              >
                Fixtures
              </a>

              <a
                href="#registration"
                className="text-sm font-medium text-white/65 transition hover:text-[#00ff4f]"
              >
                Registration
              </a>
            </div>

            <div className="hidden lg:block">
              <a
                href="#registration"
                className="group flex items-center gap-3 rounded-full bg-[#00ff4f] px-5 py-3 text-xs font-black uppercase tracking-wider text-black transition hover:gap-4 hover:shadow-[0_0_30px_rgba(0,255,79,0.25)]"
              >
                Register Academy
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-full border border-white/15 p-3 text-white lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </nav>
        </div>

        {mobileOpen && (
          <div className="border-b border-white/10 bg-[#080b09] px-6 py-7 lg:hidden">
            <div className="flex flex-col gap-5">
              <a
                onClick={closeMobile}
                href="#tournament"
                className="text-sm font-semibold text-white"
              >
                Tournament
              </a>

              <a
                onClick={closeMobile}
                href="#age-groups"
                className="text-sm font-semibold text-white"
              >
                Age Groups
              </a>

              <a
                onClick={closeMobile}
                href="#fixtures"
                className="text-sm font-semibold text-white"
              >
                Fixtures
              </a>

              <a
                onClick={closeMobile}
                href="#registration"
                className="text-sm font-semibold text-white"
              >
                Registration
              </a>

              <a
                onClick={closeMobile}
                href="#registration"
                className="mt-2 rounded-full bg-[#00ff4f] px-5 py-3 text-center text-xs font-black uppercase text-black"
              >
                Register Academy
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-[820px] overflow-hidden bg-[#050706] sm:min-h-[900px]"
      >
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 scale-105 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=2400&q=90')",
            }}
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#050706] via-[#050706]/55 to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#050706] via-transparent to-[#050706]/30" />

          <div className="absolute -right-40 top-40 h-[500px] w-[500px] rounded-full bg-[#00ff4f]/10 blur-[140px]" />
        </div>

        <div className="relative mx-auto flex min-h-[820px] max-w-[1440px] items-end px-5 pb-16 pt-32 sm:min-h-[900px] sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <div className="w-full">
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#00ff4f] px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-black">
                Nairobi • Kenya
              </span>

              <span className="rounded-full border border-white/15 bg-black/25 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/80 backdrop-blur-md">
                December 8 — 15, 2026
              </span>
            </div>

            <h1 className="max-w-[1200px] text-[18vw] font-black uppercase leading-[0.72] tracking-[-0.085em] sm:text-[130px] lg:text-[180px]">
              Nairobi
              <br />
              <span className="text-[#00ff4f]">Junior</span>
              <br />
              Cup.
            </h1>

            <div className="mt-10 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-md text-sm leading-7 text-white/60 sm:text-base">
                Eight days of youth football, competition and unforgettable
                moments. Bring your academy. Bring your best players. Take your
                place at Nairobi Junior Cup 2026.
              </p>

              <a
                href="#registration"
                className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#00ff4f] px-7 py-4 text-xs font-black uppercase tracking-[0.12em] text-black transition hover:gap-6 hover:shadow-[0_0_35px_rgba(0,255,79,0.3)]"
              >
                Enter Your Academy
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 right-6 hidden items-center gap-3 text-white/40 lg:flex">
            <ArrowDownRight className="h-5 w-5" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
              Explore tournament
            </span>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="bg-[#00ff4f] text-black">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 sm:grid-cols-4">
          {[
            ["08", "Days"],
            ["U7–U17", "Age Groups"],
            ["2,100", "KES / Player"],
            ["04", "Competition Paths"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="border-r border-black/10 px-5 py-7 last:border-r-0 sm:px-8 lg:px-12"
            >
              <div className="text-2xl font-black tracking-tight sm:text-3xl">
                {number}
              </div>

              <div className="mt-1 text-[9px] font-black uppercase tracking-[0.16em] opacity-60">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TOURNAMENT */}
      <section id="tournament" className="bg-[#080b09] py-24 sm:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#00ff4f]" />

                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/40">
                  More than a tournament
                </span>
              </div>

              <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.86] tracking-[-0.06em] sm:text-7xl lg:text-[96px]">
                Give your
                <br />
                academy a
                <br />
                <span className="text-[#00ff4f]">bigger stage.</span>
              </h2>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-base leading-8 text-white/50">
                Nairobi Junior Cup brings academies together for a week built
                around competitive football, player development and meaningful
                match experience.
              </p>

              <p className="mt-5 text-base leading-8 text-white/50">
                Every registered team has a pathway through the tournament,
                giving players more opportunities to compete instead of heading
                home after one bad result.
              </p>

              <a
                href="#registration"
                className="mt-8 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.15em] text-[#00ff4f]"
              >
                Secure your place
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-20 grid gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Compete",
                text: "Play organised matches against academies from across Nairobi and beyond.",
              },
              {
                number: "02",
                title: "Develop",
                text: "Give young players meaningful minutes, pressure situations and competitive experience.",
              },
              {
                number: "03",
                title: "Progress",
                text: "Every team gets a competitive route through the Main, Plate or Bowl pathway.",
              },
            ].map((item) => (
              <div key={item.number} className="bg-[#0d110e] p-8 sm:p-10 lg:p-12">
                <div className="text-xs font-black text-[#00ff4f]">
                  {item.number}
                </div>

                <h3 className="mt-16 text-2xl font-black uppercase tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/40">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGE GROUPS */}
      <section
        id="age-groups"
        className="bg-[#050706] py-24 text-white sm:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#00ff4f]" />

                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/40">
                  Find your division
                </span>
              </div>

              <h2 className="max-w-3xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.06em] sm:text-7xl">
                One cup.
                <br />
                <span className="text-[#00ff4f]">Every generation.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/40">
              Age-specific competition designed to keep the football
              challenging, fair and enjoyable.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {ageGroups.map((group, index) => (
              <div
                key={group.age}
                className="group relative min-h-[270px] overflow-hidden bg-[#0a0e0b] p-7 transition duration-300 hover:bg-[#0e1510]"
              >
                <div className="absolute -right-8 -top-10 text-[150px] font-black leading-none text-white/[0.025]">
                  {group.age.replace("U", "")}
                </div>

                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00ff4f]">
                      Division {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="mt-5 text-6xl font-black tracking-[-0.06em]">
                      {group.age}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-black uppercase">
                      {group.label}
                    </h3>

                    <p className="mt-2 max-w-xs text-xs leading-6 text-white/40">
                      {group.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIXTURES */}
      <section id="fixtures" className="bg-[#080b09] py-24 sm:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#00ff4f]" />

                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/40">
                  Match week
                </span>
              </div>

              <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.06em] sm:text-7xl">
                The week
                <br />
                <span className="text-[#00ff4f]">starts here.</span>
              </h2>

              <p className="mt-7 max-w-sm text-sm leading-7 text-white/40">
                Follow the fixtures, find your pitch and keep your academy
                ready for matchday.
              </p>

              <button className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-xs font-black uppercase tracking-wider text-black transition hover:bg-[#00ff4f]">
                View full fixtures
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="lg:col-span-8">
              <div className="overflow-hidden rounded-3xl border border-white/10">
                {matches.map((match, index) => (
                  <div
                    key={`${match.date}-${match.home}`}
                    className={`grid gap-5 p-6 sm:grid-cols-[90px_1fr_auto] sm:items-center sm:p-8 ${
  index !== matches.length - 1
      ? "border-b border-white/10"
      : ""
}`}
                  >
                    <div>
                      <div className="text-xs font-black text-[#00ff4f]">
                        {match.date}
                      </div>

                      <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white/30">
                        {match.time}
                      </div>
                    </div>

                    <div>
                      <div className="mb-3 flex items-center gap-2">
                        <span className="rounded-full bg-[#00ff4f]/10 px-2.5 py-1 text-[9px] font-black uppercase text-[#00ff4f]">
                          {match.category}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-lg font-black uppercase tracking-tight">
                        <span>{match.home}</span>

                        <span className="text-xs font-medium text-white/25">
                          vs
                        </span>

                        <span>{match.away}</span>
                      </div>

                      <div className="mt-2 flex items-center gap-1.5 text-[10px] font-medium text-white/30">
                        <MapPin className="h-3 w-3" />
                        {match.venue}
                      </div>
                    </div>

                    <button className="flex w-fit items-center gap-2 text-[10px] font-black uppercase tracking-wider text-[#00ff4f]">
                      Match details
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOURNAMENT FORMAT */}
      <section className="bg-[#0b0f0c] py-24 sm:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#050706] p-8 text-white sm:p-12">
                <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#00ff4f]/10 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00ff4f]">
                      Tournament pathway
                    </span>

                    <Trophy className="h-5 w-5 text-[#00ff4f]" />
                  </div>

                  <div className="mt-12 space-y-3">
                    {[
                      ["01", "Group Stage", "Start together"],
                      ["02", "Main Cup", "Top finishers"],
                      ["03", "Plate Cup", "Competitive route"],
                      ["04", "Bowl Cup", "Everyone keeps playing"],
                    ].map(([number, title, text]) => (
                      <div
                        key={number}
                        className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                      >
                        <span className="text-xs font-black text-[#00ff4f]">
                          {number}
                        </span>

                        <div className="flex-1">
                          <div className="text-sm font-black uppercase">
                            {title}
                          </div>

                          <div className="mt-1 text-xs text-white/35">
                            {text}
                          </div>
                        </div>

                        <Check className="h-4 w-4 text-white/20" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#00ff4f]" />

                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/40">
                  Built for competition
                </span>
              </div>

              <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-6xl">
                One bad game
                <br />
                shouldn't end
                <br />
                <span className="text-[#00ff4f]">your week.</span>
              </h2>

              <p className="mt-7 text-sm leading-7 text-white/40">
                Our four-path competition structure means teams continue
                playing throughout the tournament. Group-stage results shape
                the next challenge instead of sending players home early.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <Trophy className="h-5 w-5 text-[#00ff4f]" />

                  <div className="mt-6 text-lg font-black uppercase">
                    More games
                  </div>

                  <div className="mt-1 text-xs leading-5 text-white/35">
                    More opportunities to compete.
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <Users className="h-5 w-5 text-[#00ff4f]" />

                  <div className="mt-6 text-lg font-black uppercase">
                    More players
                  </div>

                  <div className="mt-1 text-xs leading-5 text-white/35">
                    More young players get meaningful minutes.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTRATION */}
      <section
        id="registration"
        className="bg-[#050706] py-24 text-white sm:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#00ff4f]" />

                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/40">
                  Academy registration
                </span>
              </div>

              <h2 className="text-5xl font-black uppercase leading-[0.86] tracking-[-0.06em] sm:text-7xl lg:text-[86px]">
                Bring your
                <br />
                <span className="text-[#00ff4f]">team.</span>
              </h2>

              <p className="mt-7 max-w-lg text-sm leading-7 text-white/40">
                Choose the number of squads and players you are bringing. Your
                registration estimate updates instantly.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <CalendarDays className="h-5 w-5 text-[#00ff4f]" />

                  <div className="mt-6 text-xl font-black">8–15 DEC</div>

                  <div className="mt-1 text-[10px] uppercase tracking-wider text-white/30">
                    Tournament week
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <ShieldCheck className="h-5 w-5 text-[#00ff4f]" />

                  <div className="mt-6 text-xl font-black">KES 2,100</div>

                  <div className="mt-1 text-[10px] uppercase tracking-wider text-white/30">
                    Per player
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <div className="rounded-[2rem] bg-white p-7 text-black sm:p-9">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40">
                      Registration estimate
                    </div>

                    <div className="mt-2 text-2xl font-black uppercase">
                      Academy entry
                    </div>
                  </div>

                  <Trophy className="h-6 w-6 text-[#00a83b]" />
                </div>

                <div className="mt-10 space-y-8">
                  <div>
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-black uppercase tracking-wider">
                        Teams
                      </label>

                      <span className="rounded-full bg-[#00ff4f]/15 px-3 py-1 text-xs font-black text-[#008f35]">
                        {teams}
                      </span>
                    </div>

                    <input
                      type="range"
                      min="1"
                      max="6"
                      value={teams}
                      onChange={(e) => setTeams(Number(e.target.value))}
                      className="mt-5 w-full accent-[#00c940]"
                    />

                    <div className="mt-2 flex justify-between text-[9px] font-bold text-black/35">
                      <span>1</span>
                      <span>3</span>
                      <span>6</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-black uppercase tracking-wider">
                        Players / team
                      </label>

                      <span className="rounded-full bg-[#00ff4f]/15 px-3 py-1 text-xs font-black text-[#008f35]">
                        {players}
                      </span>
                    </div>

                    <input
                      type="range"
                      min="7"
                      max="18"
                      value={players}
                      onChange={(e) => setPlayers(Number(e.target.value))}
                      className="mt-5 w-full accent-[#00c940]"
                    />

                    <div className="mt-2 flex justify-between text-[9px] font-bold text-black/35">
                      <span>7</span>
                      <span>12</span>
                      <span>18</span>
                    </div>
                  </div>
                </div>

                <div className="my-8 border-t border-black/10" />

                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.18em] text-black/40">
                      {totalPlayers} players
                    </div>

                    <div className="mt-2 text-4xl font-black tracking-[-0.04em]">
                      KES {total.toLocaleString()}
                    </div>
                  </div>

                  <div className="text-right text-[10px] font-bold text-black/35">
                    KES 2,100
                    <br />
                    per player
                  </div>
                </div>

                <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-[#00c940] px-6 py-4 text-xs font-black uppercase tracking-[0.12em] text-black transition hover:bg-[#00ff4f]">
                  Continue Registration
                  <ArrowRight className="h-4 w-4" />
                </button>

                <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-medium text-black/40">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#00a83b]" />
                  Secure M-Pesa payment
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-[#00ff4f] py-20 text-black">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="text-[10px] font-black uppercase tracking-[0.25em] text-black/50">
                Built around trust
              </div>

              <h2 className="mt-4 text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-6xl">
                Parents trust
                <br />
                the process.
                <br />
                Coaches trust
                <br />
                the game.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:col-span-7">
              {[
                {
                  icon: ShieldCheck,
                  title: "Age verification",
                  text: "NEMIS documentation and age-group checks.",
                },
                {
                  icon: Users,
                  title: "Organised competition",
                  text: "Structured fixtures and clear tournament pathways.",
                },
                {
                  icon: Trophy,
                  title: "Real competition",
                  text: "A tournament designed around playing football.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-[#050706] p-6 text-white"
                  >
                    <Icon className="h-5 w-5 text-[#00ff4f]" />

                    <h3 className="mt-10 text-sm font-black uppercase">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-white/40">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="bg-[#080b09] py-24 sm:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#00ff4f]" />

                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/40">
                  Important information
                </span>
              </div>

              <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-6xl">
                Everything
                <br />
                <span className="text-[#00ff4f]">in one place.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/40">
              Download the documents your academy needs before match week.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-2">
            {documents.map((document) => (
              <button
                key={document.title}
                className="group flex items-center justify-between bg-[#0d110e] p-6 text-left transition hover:bg-[#111711]"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00ff4f]/10 text-[#00ff4f]">
                    <Download className="h-4 w-4" />
                  </div>

                  <div>
                    <div className="text-sm font-black uppercase">
                      {document.title}
                    </div>

                    <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white/25">
                      {document.type} • Tournament 2026
                    </div>
                  </div>
                </div>

                <ArrowRight className="h-4 w-4 text-white/25 transition group-hover:translate-x-1 group-hover:text-[#00ff4f]" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#050706] py-28 text-white sm:py-36">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=2200&q=85')",
          }}
        />

        <div className="absolute inset-0 bg-[#050706]/75" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ff4f]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#00ff4f] text-black">
            <Trophy className="h-6 w-6" />
          </div>

          <h2 className="mt-8 text-5xl font-black uppercase leading-[0.85] tracking-[-0.06em] sm:text-7xl lg:text-[100px]">
            Your academy.
            <br />
            <span className="text-[#00ff4f]">Your moment.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
            Registration for Nairobi Junior Cup 2026 is now open. Bring your
            players, join the competition and make your mark.
          </p>

          <a
            href="#registration"
            className="mt-9 inline-flex items-center gap-4 rounded-full bg-[#00ff4f] px-8 py-4 text-xs font-black uppercase tracking-[0.12em] text-black transition hover:gap-6 hover:shadow-[0_0_40px_rgba(0,255,79,0.3)]"
          >
            Register your academy
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020302] py-10 text-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00ff4f] text-black">
              <Trophy className="h-4 w-4" />
            </div>

            <div>
              <div className="text-xs font-black tracking-[0.15em]">
                NAIROBI JUNIOR CUP
              </div>

              <div className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/25">
                Nairobi • Kenya • 2026
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-[10px] font-bold uppercase tracking-wider text-white/35">
            <a href="#home" className="transition hover:text-[#00ff4f]">
              Home
            </a>

            <a
              href="#tournament"
              className="transition hover:text-[#00ff4f]"
            >
              Tournament
            </a>

            <a href="#fixtures" className="transition hover:text-[#00ff4f]">
              Fixtures
            </a>

            <a
              href="#registration"
              className="transition hover:text-[#00ff4f]"
            >
              Registration
            </a>

            <a
              href="#age-groups"
              className="transition hover:text-[#00ff4f]"
            >
              Age Groups
            </a>
          </div>

          <div className="text-[10px] font-medium text-white/20">
            © 2026 Nairobi Junior Cup
          </div>
        </div>
      </footer>
    </main>
  );
}

