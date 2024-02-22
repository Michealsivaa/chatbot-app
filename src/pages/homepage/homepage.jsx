import { useState } from 'react';
import Grid from "@mui/material/Grid";
import FolderIcon from '@mui/icons-material/Folder';
import ChatIcon from '@mui/icons-material/Chat';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import UploadIcon from '@mui/icons-material/Upload';
import useStyles from './styles';

const HomePage = () => {
  const { topicHeading, hrAdviceTitle, topicAreaSection, topicActive, selectSource, advancedPrompt, uploadSection } = useStyles();
  const [isActive, setIsActive] = useState(false);
  const topicArea = [
    { id: 1, area: 'Absense Management' },
    { id: 2, area: 'Family-friendly rights' },
    { id: 3, area: 'Recruitment' },
    { id: 4, area: 'Contract of emplyement' },
    { id: 5, area: 'Grievances' },
    { id: 6, area: 'Sensitive suituation' },
    { id: 7, area: 'Data Protection' },
    { id: 8, area: 'Health and safety' },
    { id: 9, area: 'Termination of employment' },
    { id: 10, area: 'Discipline' },
    { id: 12, area: 'HR policy and strategy' },
    { id: 13, area: 'Training and development' },
    { id: 14, area: 'Employee relations' },
    { id: 15, area: 'Pay and benefits' },
    { id: 16, area: 'TUPE' },
    { id: 17, area: 'Employment disputes' },
    { id: 17, area: 'Pensions' },
    { id: 18, area: 'Working time & time off work' },
    { id: 19, area: 'Equal opportunities' },
    { id: 20, area: 'Performance management' },
    { id: 21, area: 'Workplace incident / accident' },
  ];
  const handleClick = (event, id) => {
    setIsActive(id);
  };
  return (
    <>
      <Grid container>
        <Grid item xs={12} className={hrAdviceTitle}>
          <p>I am your HR advice and employment law AI assistant.</p>
          <p> My expertise also covers the areas of Health & Safety, Immigration and Persions</p>
        </Grid>
        <Grid item xs={12}>
          <h1 className={topicHeading}>Please Select a topic area</h1>
          <Grid container direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}>
            {topicArea.map((item) => {
              return (
                <Grid item xs={12} sm={12} md={3.7} lg={3.7} xl={3.7}>
                  <div className={isActive === item.id ? topicActive : topicAreaSection} onClick={(event) => handleClick(event, item.id)}>
                    {item.area}
                  </div>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: 10 }}>
          <div className={uploadSection}><div className={selectSource}>
            <p>Select Source</p>
            <FolderIcon />
          </div>
            <div className={advancedPrompt}>
              <p>Advanced Promt</p>
              <ChatIcon />
            </div></div>
            <OutlinedInput
                fullWidth
                placeholder="Enter a prompt here"
                id="outlined-adornment-amount"
                startAdornment={<AttachFileIcon position="start" />}
                endAdornment={<UploadIcon position="end" />}
              />
        </Grid>
      </Grid>
    </>
  )
}

export default HomePage