import perfil from "../assets/perfil.jpeg";

function Contact() {
  return (
    <main className="w-full">
      <section className="mx-auto w-full max-w-4xl px-3 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/80 via-zinc-900/60 to-zinc-900/80
          shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl p-6 sm:p-7 md:p-8 lg:p-10
          dark:border-zinc-200/60 dark:from-white/90 dark:via-white/70 dark:to-white/90">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-8">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row sm:items-center items-start gap-3 sm:gap-4">
                <img
                  src={perfil}
                  alt="Foto de perfil de Michael Moranis"
                  className="h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover
                    ring-2 ring-white/20 shadow-lg"
                  loading="lazy"
                />
                <div className="flex flex-col gap-2 sm:gap-2">
                  <span className="text-xs uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500">Contato</span>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white dark:text-zinc-900">
                    Vamos conversar
                  </h1>
                </div>
              </div>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 dark:text-zinc-600 max-w-xl">
              Me envie uma mensagem e respondo o mais breve possivel.
            </p>
          </div>

          <ul className="mt-7 sm:mt-8 grid gap-4 sm:gap-5 sm:grid-cols-2">
            <li className="min-w-0 flex flex-col gap-1 rounded-xl border border-white/10 bg-white/5 p-5 sm:p-5
              dark:border-zinc-200/70 dark:bg-zinc-50
              transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10
              dark:hover:border-zinc-300/80 dark:hover:bg-zinc-100">
              <span className="text-xs uppercase tracking-widest text-zinc-400">Email</span>
              <a
                href="mailto:michaelmoranesul@gmail.com"
                className="text-sm sm:text-base md:text-lg text-white hover:text-blue-300 transition-colors break-all sm:break-words
                  dark:text-zinc-900 dark:hover:text-blue-600
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2
                  focus-visible:ring-offset-zinc-900 dark:focus-visible:ring-offset-white"
                aria-label="Enviar email para michaelmoranesul@gmail.com"
              >
                michaelmoranesul@gmail.com
              </a>
            </li>
            <li className="min-w-0 flex flex-col gap-1 rounded-xl border border-white/10 bg-white/5 p-5 sm:p-5
              dark:border-zinc-200/70 dark:bg-zinc-50
              transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10
              dark:hover:border-zinc-300/80 dark:hover:bg-zinc-100">
              <span className="text-xs uppercase tracking-widest text-zinc-400">WhatsApp</span>
              <a
                href="https://wa.me/5545991359794"
                className="text-sm sm:text-base md:text-lg text-white hover:text-blue-300 transition-colors break-all sm:break-words
                  dark:text-zinc-900 dark:hover:text-blue-600
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2
                  focus-visible:ring-offset-zinc-900 dark:focus-visible:ring-offset-white"
                aria-label="Abrir conversa no WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                +55 (45) 99135-9794
              </a>
            </li>
            <li className="min-w-0 flex flex-col gap-1 rounded-xl border border-white/10 bg-white/5 p-5 sm:p-5
              dark:border-zinc-200/70 dark:bg-zinc-50
              transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10
              dark:hover:border-zinc-300/80 dark:hover:bg-zinc-100">
              <span className="text-xs uppercase tracking-widest text-zinc-400">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/michaelmoranis"
                className="text-sm sm:text-base md:text-lg text-white hover:text-blue-300 transition-colors break-all sm:break-words
                  dark:text-zinc-900 dark:hover:text-blue-600
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2
                  focus-visible:ring-offset-zinc-900 dark:focus-visible:ring-offset-white"
                aria-label="Abrir perfil no LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/michaelmoranis
              </a>
            </li>
            <li className="min-w-0 flex flex-col gap-1 rounded-xl border border-white/10 bg-white/5 p-5 sm:p-5
              dark:border-zinc-200/70 dark:bg-zinc-50
              transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10
              dark:hover:border-zinc-300/80 dark:hover:bg-zinc-100">
              <span className="text-xs uppercase tracking-widest text-zinc-400">GitHub</span>
              <a
                href="https://github.com/MichaelMoranis"
                className="text-sm sm:text-base md:text-lg text-white hover:text-blue-300 transition-colors break-all sm:break-words
                  dark:text-zinc-900 dark:hover:text-blue-600
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2
                  focus-visible:ring-offset-zinc-900 dark:focus-visible:ring-offset-white"
                aria-label="Abrir perfil no GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/MichaelMoranis
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Contact;
