"use client";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelectedLayoutSegment } from "next/navigation";

export default function ButtonGroup() {
  const activeSegment = useSelectedLayoutSegment();
  const router = useRouter();
  return (
    <div className="mb-6 flex gap-6 items-stretch">
      {/* <Link href="/knowledge/de/whatis"> */}
      <button
        onClick={() => {
          router.push("/knowledge/de/whatis");
        }}
        className={`button-blue-sm ${
          !activeSegment || activeSegment === "whatis"
            ? "bg-bg-hover"
            : undefined
        }`}
      >
        Understanding Disordered Eating{" "}
      </button>
      {/* </Link> */}
      {/* <Link href="/knowledge/de/whyandhow"> */}
      <button
        onClick={() => {
          router.push("/knowledge/de/whyandhow");
        }}
        className={`button-blue-sm ${
          activeSegment === "whyandhow" ? "bg-bg-hover" : undefined
        }`}
      >
        Causes & Mechanisms of Disordered Eating
      </button>
      {/* <Link href="/knowledge/de/when"> */}
      <button
        onClick={() => {
          router.push("/knowledge/de/when");
        }}
        className={`button-blue-sm ${
          activeSegment === "when" ? "bg-bg-hover" : undefined
        }`}
      >
        Identifying Problematic Disordered Eating
      </button>
      {/* </Link> */}
      {/* <Link href="/knowledge/de/importance"> */}
      <button
        onClick={() => {
          router.push("/knowledge/de/importance");
        }}
        className={`button-blue-sm ${
          activeSegment === "importance" ? "bg-bg-hover" : undefined
        }`}
      >
        Significance of Understanding Disordered Eating
      </button>
      {/* </Link> */}
    </div>
  );
}
