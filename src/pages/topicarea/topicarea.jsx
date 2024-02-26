import { useState } from 'react';
import Grid from "@mui/material/Grid";
import FolderIcon from '@mui/icons-material/Folder';
import ChatIcon from '@mui/icons-material/Chat';
import useStyles from './styles';
import SearchBox from '../../elements/searchbox';

const TopicArea = () => {
  const { topicHeading, hrAdviceTitle, topicAreaSection, topicActive, selectSource, advancedPrompt, uploadSection, chatboxSection, chatboxRow, homePageTop } = useStyles();
  const [isActive, setIsActive] = useState(false);
  
  const topicArea = [
    { id: 1, area: 'Absense Management' },

  ];
  const handleClick = (event, id) => {
    setIsActive(id);
  };

  return (
    <>
      <Grid container className={homePageTop}>
        <Grid item xs={12}>
          <h1 className={topicHeading}>Absense Management</h1>
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