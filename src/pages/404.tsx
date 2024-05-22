import "./index.css";

function Page() {
    return (
        <>
        <div id="webview">
            <div className="centered">
                <h1>
                    <div className="wrapper">
                        <svg>
                            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                                404
                            </text>
                        </svg>
                    </div>
                </h1>
                <h2>Sorry! We can't find that page. 😞</h2>
                <a href="./">
                <button>
                    Go home.
                </button>
                </a>
            </div>
        </div>
    </>
  );
}

export default Page;
