export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
          HookHub - A directory of open source Claude Code hooks.
          <br />
          <span className="text-zinc-500 dark:text-zinc-500">
            Data sourced from the community. Want to add a hook?{' '}
            <a
              href="https://github.com/hesreallyhim/awesome-claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 underline hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
            >
              Submit to Awesome Claude Code
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
