
export const ShowTask = ({tasklist, setTasklist}) => {
    // const tasks =[
    //     {id: 1001, name:'task A', time: ' 2:09:01 AM 9/14/2030'},
    //     {id: 1002, name:'task B', time: ' 2:09:01 AM 9/14/2031'},
    //     {id: 1003, name:'task C', time: ' 2:09:01 AM 9/14/2032'},
    //     {id: 1004, name:'task D', time: ' 2:09:01 AM 9/14/2034'},
    // ]
    return (
        <section className='showTask'>
            <div className='head'>
                <div>
                    <span className='title'>Todo</span>
                    <span className='count'>{tasklist.length}</span>
                </div>
                <button className='clearAll'>clear All</button>
            </div>
            
            <ul>
                {tasklist.map((task)=>
            <li>
            <p>
                <span className='name'>{task.name}</span>
                <span className='time'>{task.time}</span>

            </p>
            <i className='bi bi-pencil-square'></i>
            <i className='bi bi-trash'></i>
        </li>

            )}
                
            </ul>
        </section>
    )
}