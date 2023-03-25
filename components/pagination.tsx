export default function Pagination( { totalPage, setPage, page } : any) {
  return (
    <div className="d-flex mt-5">
      <ul className="pagination mx-auto ">
        <li className={page > 1 ? 'page-item' : 'page-item disabled'}>
          <a className='page-link' onClick={()=>{setPage(page-1)}} href='#'>Previous</a>
        </li>
        {
          Array(totalPage).fill(null).map((_, i) => {
            return (
              <li key={i + 1} onClick={() => setPage(i + 1)} className={ page == i+1 ? 'page-item active' : 'page-item'}>
                <a className='page-link' href='#'>{i + 1}</a></li>
            );
          })
        }
        <li className={page === totalPage ? 'page-item disabled' : 'page-item'}>
          <a onClick={()=>{setPage(page+1)}} className='page-link' href='#'>Next</a>
        </li>
      </ul>
    </div>
  );
};
