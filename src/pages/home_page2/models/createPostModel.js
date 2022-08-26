function ReportModel(show,close){
    return(
        <>
            {show?(
               <div className="reportModelContainer">
                    <div className="reportModel">
                        <header className="reportModelHeader">
                            <h2 className="reportModelTitle">Report Content</h2>
                            <button className="close" onClick={()=>close()}>close</button>
                        </header>
                        <main className="reportModelContent">

                        </main>
                        <footer className="reportModelFooter">
                            <button className="submit">submit</button>
                        </footer>
                    </div>
               </div>

            ):null}
        </>
    )
}

