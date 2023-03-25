export default function Card({item}:any) {
  console.log(item)
  return(
    <div className="col d-flex">
      <div className="card shadow-sm">
        <div className="p-3">
        <h4>{item.name}</h4>
        <img src={item.links.patch.small === null ? "https://cdnph.upi.com/pv/upi/8e37c1e9cb6aeb0f2845acc2c6e6ef35/NASA-SPACEX-CREW-6.jpg" : item.links.patch.small} className="img-fluid"/>
        </div>
        <div className="card-body">
          <> {item.success ?
            <span className="badge rounded-pill bg-success">Success </span>:
            <span className="badge rounded-pill bg-danger">Failure</span> }</>
          <div className="mt-2">
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Date utc</strong> : {item.date_utc}</li>
            <li className="list-group-item"><strong>Payloads</strong> : {item.payloads}</li>
            <li className="list-group-item"><strong>Cores</strong> : {item.cores[0].core}</li>
            {item.details === null ? <></> :
              <li className="list-group-item"><p className="bold">
                Reason for {item.success ? "Success" : "Failure"}</p> <br/>
                {item.details === null ? "k" : item.details}</li>
            }
          </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
