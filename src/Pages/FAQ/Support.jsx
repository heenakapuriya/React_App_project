import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Support = () => {
  return (
    <div className='container-2xl xs:px-0 md:px-32'>
    <div className='h-auto w-full flex flex-wrap lg:flex-nowrap p-5 '>
    <div className='w-1/4 h-auto pt-12  '>
        <h1 className='text-black font-bold text-3xl'>Support</h1>
    </div>

    <div className=' pt-3'>
        <div>
            <div>
                <Accordion className='border-0 shadow-none text-lg font-bold ' >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className='w-full shadow-none '>Global Search Engine Optimization</Typography>
                    </AccordionSummary>
                    <AccordionDetails className=''>
                        <Typography>
                            A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Complete Social media integration</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Branding Stratagy and startups</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>How do long i get Support & Updates</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>

        </div>


    </div>

</div>
    </div>
  )
}

export default Support
