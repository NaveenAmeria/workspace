import type { TeamMember } from "@/types/team";

/**
 * Single team member card for the About page grid — gradient initial
 * headshot placeholder, department pill, role, bio, and skill tags.
 */
export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group flex h-full flex-col items-center rounded-card border border-line bg-card px-6 py-8 text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:border-violet hover:shadow-glow-violet">
      {/* Headshot placeholder — first letter on brand gradient */}
      <span
        aria-hidden="true"
        className="flex h-20 w-20 items-center justify-center rounded-full font-display text-[32px] font-bold text-white transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-[0_0_32px_rgba(108,99,255,0.45)]"
        style={{
          background: "linear-gradient(135deg, #6C63FF 0%, #00E5BE 100%)",
        }}
      >
        {member.name.charAt(0)}
      </span>

      {/* Department tag */}
      <span className="mt-4 rounded border border-violet/30 bg-violet/[0.12] px-2.5 py-1 font-mono text-[11px] leading-none text-violet transition-colors duration-300 group-hover:border-violet/60 group-hover:bg-violet/25">
        {member.department}
      </span>

      <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-snow">
        {member.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-violet">{member.role}</p>

      <p className="mt-4 flex-1 text-sm leading-[1.6] text-mute">{member.bio}</p>

      {/* Skill tags */}
      <ul className="mt-5 flex flex-wrap justify-center gap-1.5" aria-label={`${member.name}'s skills`}>
        {member.skills.map((skill) => (
          <li
            key={skill}
            className="rounded border border-line bg-base px-2 py-1 font-mono text-[11px] leading-none text-dim transition-all duration-200 hover:-translate-y-0.5 hover:border-violet/40 hover:text-violet"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
