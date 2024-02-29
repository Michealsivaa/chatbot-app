import { useState } from 'react';
import Grid from "@mui/material/Grid";
import FolderIcon from '@mui/icons-material/Folder';
import ChatIcon from '@mui/icons-material/Chat';
import useStyles from './styles';
import SearchBox from '../../elements/searchbox';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../components/Breadcrumbs';


const HomePage = () => {
  const { topicHeading, hrAdviceTitle, topicAreaSection, topicActive, selectSource, advancedPrompt, uploadSection, chatboxSection, chatboxRow, homePageTop } = useStyles();
  const [isActive, setIsActive] = useState(false);
  
  const topicArea = [
    { id: 1, area: 'Absense Management', pageLink: "/topicarea" },
    { id: 2, area: 'Family-friendly rights', pageLink: "/familyfriendly" },
    { id: 3, area: 'Recruitment', pageLink: "/recruitment" },
    { id: 4, area: 'Contract of emplyement', pageLink: "/contract" },
    { id: 5, area: 'Grievances', pageLink: "/grievances" },
    { id: 6, area: 'Sensitive suituation', pageLink: "/sensitive" },
    { id: 7, area: 'Data Protection', pageLink: "/dataprotection" },
    { id: 8, area: 'Health and safety', pageLink: "/healthyandsafety" },
    { id: 9, area: 'Termination of employment', pageLink: "/termination" },
    { id: 10, area: 'Discipline', pageLink: "/discipline" },
    { id: 11, area: 'HR policy and strategy', pageLink: "/hrpolicy" },
    { id: 12, area: 'Training and development', pageLink: "/training" },
    { id: 13, area: 'Employee relations', pageLink: "/employee" },
    { id: 14, area: 'Pay and benefits', pageLink: "/payandbenefits" },
    { id: 15, area: 'TUPE', pageLink: "/tube" },
    { id: 16, area: 'Employment disputes', pageLink: "/employmentdisputes" },
    { id: 17, area: 'Pensions',pageLink: "/pensions" },
    { id: 18, area: 'Working time & time off work', pageLink: "/working" },
    { id: 29, area: 'Equal opportunities', pageLink: "/equal" },
    { id: 20, area: 'Performance management', pageLink: "/performance" },
    { id: 21, area: 'Workplace incident / accident', pageLink: "/workplace-incident" },
  ];
  const handleClick = (event, id) => {
    setIsActive(id);
  };

  return (
    <>
      <Grid container className={homePageTop}>
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
                    <Link to={item.pageLink} className={isActive === item.id ? topicActive : topicAreaSection} onClick={(event) => handleClick(event, item.id)}>
                    <div>
                      {item.area}
                    </div>
                    </Link>
                  </Grid>
                
              )
            })}
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} className={chatboxRow}>
            <div className={uploadSection}><div className={selectSource}>
              <p>Select Source</p>
              <FolderIcon />
            </div>
              <div className={advancedPrompt}>
                <p>Advanced Promt</p>
                <ChatIcon />
              </div></div>
              <SearchBox searchInput={chatboxSection}/>
          </Grid>
      </Grid>
    </>
  )
}

export default HomePage