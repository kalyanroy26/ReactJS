export const Nav = ({ keyword, setkeyword, getData }) => {
    return (
        <>
            <nav className="navbar">
                <h1 className="logo">Akashavani</h1>
                <input type="text" placeholder="search here" id="search"
                    onChange={(e) => setkeyword(e.target.value)}
                    onKeyUp={(e) => {
                        if (e.key == "Enter") {
                            e.preventDefault()
                            getData()
                            e.target.value = ''
                        }
                    }
                    }
                />
            </nav>
        </>
    )
}