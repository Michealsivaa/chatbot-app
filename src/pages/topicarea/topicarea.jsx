import { useState } from 'react';
import Grid from "@mui/material/Grid";
import FolderIcon from '@mui/icons-material/Folder';
import ChatIcon from '@mui/icons-material/Chat';
import useStyles from './styles';
import SearchBox from '../../elements/searchbox';
import CustomButton from '../../elements/button/customButton';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useLocation } from 'react-router-dom';

const TopicArea = () => {
  const { topicHeading, hrAdviceTitle, topicAreaSection, topicActive, selectSource, advancedPrompt, uploadSection, chatboxSection, chatboxRow, homePageTop, topicAreaButton,topicAreaInnerList,paginationSection,previous, next, promptSection } = useStyles();
  const [isActive, setIsActive] = useState(false);
  
  const topicArea = [
    { id: 1, area: 'Deal with a case of persistent short-term sickness absenses', pageLink: "/quickprompts"},
    { id: 2, area: 'Set an absence target for the organisation'},
    { id: 3, area: 'Set the absence levels that will trigger a formal review'},
    { id: 4, area: `Measure the organisation's absence rate`},
    { id: 5, area: 'Introduce return-to-work interviews as part of organisational procedure'},
    { id: 6, area: 'Conduct a return-to-work interview'},
    { id: 7, area: 'Benchmark absence rates and costs'},
    { id: 8, area: 'Arrange cover for logn-term sickness absence'},
    { id: 9, area: 'Implement a phased return to work from sickness absence'},
    { id: 10, area: 'Handle the situation where an employees goes of sick at the outset'},
    { id: 11, area: 'of a disciplinary investigation or during the disciplinary process'},
  ];
  const handleClick = (event, id) => {
    setIsActive(id);
  };

  return (
    <>
      <Grid container className={homePageTop}>
        <Grid item xs={12}>
          <CustomButton customButtonClass={topicAreaButton} name={'Absense Management'}/>
          <div className={promptSection}>
            <h1 className={topicHeading}>Quick Prompts</h1>
            <Grid container direction="row"
              justifyContent="space-between"
              alignItems="center" 
              className={topicAreaInnerList}>
              {topicArea.map((item) => {
                return (
                  <Grid item xs={12}>
                    <Link to={item.pageLink} className={isActive === item.id ? topicActive : topicAreaSection} onClick={(event) => handleClick(event, item.id)}>
                      <div>{item.area}</div>
                      <AddIcon />
                    </Link>
                  </Grid>
                )
              })}
            </Grid>
            <div className={paginationSection}>
              <p>Item per page 10 Pages 1 of 2 <ArrowBackIosIcon className={previous} /><ArrowBackIosIcon className={next}/></p>
            </div>
          </div>
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

export default TopicArea