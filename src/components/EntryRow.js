import React from 'react';
import Carousel from 'better-react-carousel'


const EntryRow = () => {
  return (
    
         <Carousel cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <img width="100%" src="https://media-exp1.licdn.com/dms/image/sync/C5627AQGPF_Q81LevVQ/articleshare-shrink_800/0/1669177142857?e=1669784400&v=beta&t=fZJN6E7nS2ETL_IAhmKTWiIXFx0AUr_RQJFq62mSs0M" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" height="400px" src="https://media-exp1.licdn.com/dms/image/C5622AQH-88ZkCsLJVg/feedshare-shrink_800/0/1669177582078?e=1672272000&v=beta&t=o6xcCRan41XXiPelVg88SAfukRD7kwoUJcEl8gQPvAg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" height="400px" src="https://media-exp1.licdn.com/dms/image/sync/C5627AQEUqZWexb4tlA/articleshare-shrink_800/0/1668684917165?e=1669784400&v=beta&t=vRLoWAHZAXDTHR_dAXkB39K_5WhAsV7nUQdsY2-ugPE" />
      </Carousel.Item>
      <Carousel.Item>
      </Carousel.Item>
      {/* ... */}
    </Carousel>

  );
}

export default EntryRow;


