import React from "react";

const Contacts = () => {
  return (
    <div className="flex h-[100dvh] flex-col justify-center gap-y-10">
      <h1 className="text-6xl font-medium md:text-8xl">Contacts</h1>
      <div className="flex flex-col gap-y-1 text-lg md:text-3xl">
        <p>
          Feel free to explore my{" "}
          <a
            href="https://www.linkedin.com/in/denyspupin/"
            target="_blank"
            className="text-accent underline"
          >
            LinkedIn
          </a>
        </p>
        <p>
          or connect via email at{" "}
          <a
            href="mailto:denyspupin.dev@gmail.com"
            className="text-accent underline"
          >
            denyspupin.dev@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contacts;
