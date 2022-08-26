import { Modal } from '@mui/material';
import './model.css'

const ReportModel=()=>{
    return(
        <>
           

               <div className="reportModelContainer">
                    <div className="reportModel"  onClick={(e) => e.stopPropagation()}>
                        <header className="reportModelHeader">
                            <h2 className="reportModelTitle">Report this post</h2>
                            <button className="close" >X</button>
                        </header>
                        <main className="reportModelContent">
                            <select placeholder="">
                                <option value="" disabled selected hidden>Select your Reason</option>
                            </select>
                            <div className="reportModelContentInput">
                                <input  type='textarea' placeholder='Type your message'/>
                            </div>
                        </main>
                        <footer className="reportModelFooter">
                            <button className="submit">submit</button>
                        </footer>
                    </div>
               </div>

        </>
    )
}

export default ReportModel;