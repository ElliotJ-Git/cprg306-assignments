import Link from "next/link";

export default function Assignments() {

    return(

      <main>
        <h1 className="text-3x1">CPRG306: Web Development 2 - Assignments</h1>
        <ul>
          <li><Link className="text-cyan-600 underline" href="./week-2/">Assignment2 - Week 2</Link></li>
          <li><Link className="text-cyan-600 underline" href="./week-3/">Assignment3 - Week 3</Link></li>
          <li><Link className="text-cyan-600 underline" href="./week-4/">Assignment4 - Week 4</Link></li>
          <li><Link className="text-cyan-600 underline" href="./week-5/">Assignment5 - Week 5</Link></li>
          <li><Link className="text-cyan-600 underline" href="./week-6/">Assignment6 - Week 6</Link></li>
          <li><Link className="text-cyan-600 underline" href="./week-7/">Assignment7 - Week 7</Link></li>
          <li><Link className="text-cyan-600 underline" href="./week-8/">Assignment8 - Week 8</Link></li>
        </ul>

      </main>
    );
}
