function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full">
            <div className="mx-auto max-w-7xl w-full px-3 sm:px-4 md:px-6 lg:px-8">
                <div className="h-px w-full bg-black/10" />
            </div>
            <div className="mx-auto max-w-7xl w-full px-3 sm:px-4 md:px-6 lg:px-8 py-6 flex flex-col items-center justify-center gap-1 text-xs sm:text-sm opacity-80">
                <p>@moranisdev {currentYear}.</p>
                <p>desenvolvido por @moranisdev.</p>
            </div>
        </footer>
    );
}

export default Footer