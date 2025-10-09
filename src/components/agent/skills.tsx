import { SideHeader } from "./form/side-header";
import { Skill, Art } from "./skill";
import skillData from "@/data/skills.json";

export default function Skills() {
  console.log(skillData);
  return (
    <div className="flex flex-col outline-1 outline-zinc-800 sm:flex-row print:outline-slate-950 break-after-page">
      <SideHeader>Applicable Skill Sets</SideHeader>
      <div className="w-full">
        <div className="grid grid-cols-3">
          <div className="flex flex-col">
            <Skill
              skill="Accounting"
              score={10}
              tooltip="The study of finance and business. Use it to sift through financial records for anomalies, such as a hidden bank account or money laundering."
              base={10}
            />
            <Art
              skill="Art"
              tooltip="Expertise at creating or performing a work that sways emotions and opinions. It also encompasses knowledge of techniques and trends in your field, and the ability tell a particular creator’s real work from a fake. Anyone can draw a rough sketch; the Art skill reflects knowledge, practice, and talent. Each type of Art is a separate skill: Acting, Creative Writing, Dance, Flute, Forgery, Guitar, Painting, Poetry, Scriptwriting, Sculpture, Singing, Violin, etc."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
