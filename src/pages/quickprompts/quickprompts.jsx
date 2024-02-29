import { useState } from 'react';
import Grid from "@mui/material/Grid";
import FolderIcon from '@mui/icons-material/Folder';
import ChatIcon from '@mui/icons-material/Chat';
import useStyles from './styles';
import SearchBox from '../../elements/searchbox';
import CustomButton from '../../elements/button/customButton';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useContext } from 'react';
import { MyContextApi } from '../../App';



const TopicArea = () => {
  const { topicHeading, hrAdviceTitle, topicAreaSection, topicActive, selectSource, advancedPrompt, uploadSection, chatboxSection, chatboxRow, homePageTop, topicAreaButton, topicAreaInnerList, paginationSection, previous, next, promptSection, faqHeading } = useStyles();
  const [isActive, setIsActive] = useState(false);

  const {selectRadio, setSelectedRadio} = useContext(MyContextApi);


  const faqPrompt = [
    { id: 1, faq: 'How should employers manage shot-term sickness absence on a day-to-day basis?', pageLink: "/quickpromptslist" },
    { id: 2, faq: 'Why is it good practice to conduct return-to-work interviews every time an employee has had a day or two off work?' },
    { id: 3, faq: 'In what circumstances might an employer need to obtain a medcal report on an employee?' },
    { id: 4, faq: 'Can an employer issue a warning to an employee for poor attendance, even where there are genuine reason for their absences?' },
  ];
  const model = [
    { id: 1, faq: 'Short-term sickness absence policy', pageLink: '/' },
    { id: 2, faq: 'Absence record form' },
    { id: 3, faq: 'Form to record short-term sickness absence return-to-work meeting' },
    { id: 4, faq: 'Letter confirming when has been agreed following short-term sickness absence return-to-work meeting' },
    { id: 5, faq: `Letter ot employee's own docker/consultant requesting medical report (frewurny short-term sickness absences)` },

  ];
  const handleClick = (event, id) => {
    setIsActive(id);
    setSelectedRadio(event.target.value);
    console.log("event", event.target.value)
  };


  const handleOptionChange = (event) => {
    
    
  };




  return (
    <>
      <Grid container className={homePageTop}>
        <Grid item xs={12}>
          <CustomButton customButtonClass={topicAreaButton} name={'Absense Management'} />
          <div className={promptSection}>
            <h1 className={topicHeading}>Deal with a case of persistent short-term sickness absenses</h1>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <h4 className={faqHeading}>Select an FAQ Prompt</h4>
                <Grid container direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  className={topicAreaSection}>
                  <FormControl component="fieldset">
                    <RadioGroup aria-label="options" name="options" value={selectRadio} onChange={handleOptionChange}>
                      {faqPrompt.map((item) => (
                        <Link to={item.pageLink} className={isActive === item.id ? topicActive : topicAreaSection} onClick={(event) => handleClick(event, item.id)}>
                          <FormControlLabel
                            key={item.id}
                            value={item.faq}
                            control={<Radio />}
                            label={item.faq}
                          />
                        </Link>
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <h4 className={faqHeading}>Select a model document Prompt</h4>
                <Grid container direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  className={topicAreaSection}>
                  <FormControl component="fieldset">
                    <RadioGroup aria-label="options" name="options" value={selectRadio} onChange={handleOptionChange}>
                      {model.map((item) => (
                        <FormControlLabel
                          key={item.id}
                          value={item.faq}
                          control={<Radio />}
                          label={item.faq}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
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
          <SearchBox searchInput={chatboxSection} />
        </Grid>
      </Grid>
    </>
  )
}

export default TopicArea