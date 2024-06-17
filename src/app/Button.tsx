"use client";

import { goToOtherPage } from "./actions";

export default function Button() {
  return (
    <>
      <form>
        <button
          formAction={goToOtherPage}
          className="border-2 rounded-sm border-white py-2 px-4"
        >
          Click me
        </button>
      </form>
    </>
  );
}
