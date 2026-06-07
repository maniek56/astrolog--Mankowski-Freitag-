interface IntroScreenProps {
    onOpenForm: () => void;
}

function IntroScreen(props: IntroScreenProps) {
    return (
        <>
            <div className="intro">
                <h2>Witaj w AstroLog</h2>
                <p>Astrolog to katalog ciał niebieskich naszego obserwatorium. </p>
                <p>Wybierz obiekt z listy aby zobaczyć jego dane.</p>
                <p>Jeśli odkryłeś nowy obiekt, możesz go zgłosić w Rejstrze odkryć</p>
                <button onClick={props.onOpenForm}>Rejestr odkryć</button>
            </div>
        </>
    )
}
export default IntroScreen