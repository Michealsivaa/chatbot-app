import { useState } from 'react';
import Grid from "@mui/material/Grid";
import FolderIcon from '@mui/icons-material/Folder';
import ChatIcon from '@mui/icons-material/Chat';
import SearchBox from '../../elements/searchbox';
import CustomButton from '../../elements/button/customButton';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import useStyles from './styles';
import chatIcon from '../../images/chat-icon.jpg'


const Quickpromptslist = () => {
  const { topicHeading, hrAdviceTitle, topicAreaSection, topicActive, selectSource, advancedPrompt, uploadSection, chatboxSection, chatboxRow, homePageTop, topicAreaButton, topicAreaInnerList, paginationSection, previous, next, promptSection, faqHeading, promptSectionBotton, topicHeadingBottom,chatDetailsList } = useStyles();
  const [isActive, setIsActive] = useState(false);

  const faqPrompt = [
    { id: 1, faq: 'In what circumstances might an employer need to obtain  a medical report on an employee?' },
    { id: 2, faq: 'Can an employer issue a warning to an employee for poor attendance, even where there are genuine reasons for their absence?' },
    { id: 3, faq: 'In what circumstances might an employer need to obtain a medcal report on an employee?' },
    { id: 4, faq: 'Can an employer issue a warning to an employee for poor attendance, even where there are genuine reason for their absences?' },
  ];
  const model = [
    { id: 1, faq: 'Letter confirming  what has been agreed following short-term sickness absence return-to-work meeting' },
    { id: 2, faq: 'Letter to employee’s own doctor/consultant requesting medical report (frequent short-term sickness absences)' },
    { id: 3, faq: 'Form to record short-term sickness absence return-to-work meeting' },
    { id: 4, faq: 'Letter confirming when has been agreed following short-term sickness absence return-to-work meeting' },

  ];
  const handleClick = (event, id) => {
    setIsActive(id);
  };

  const [selectedOption, setSelectedOption] = useState('');


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
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
                {/* <h4 className={faqHeading}></h4> */}
                <Grid container direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  className={topicAreaSection}>
                  <FormControl component="fieldset">
                    <RadioGroup aria-label="options" name="options" value={selectedOption} onChange={handleOptionChange}>
                      {faqPrompt.map((item) => (
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
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                {/* <h4 className={faqHeading}></h4> */}
                <Grid container direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  className={topicAreaSection}>
                  <FormControl component="fieldset">
                    <RadioGroup aria-label="options" name="options" value={selectedOption} onChange={handleOptionChange}>
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
          <SearchBox rows={4} searchInput={chatboxSection} selectedOption={selectedOption} />
        </Grid>
      </Grid>
      <div className={promptSectionBotton}>
        <Grid container sx={{padding: '24px'}}>
          <Grid item xs={1}>
            <img src={chatIcon} />
          </Grid>
          <Grid item xs={11}>
            <div className={chatDetailsList}>
              <h1 className={topicHeadingBottom}>Managing Short-Term Sickness Absence</h1>
              <p>Employers must manage short-term sickness absence with a fair and consistent approach to maintain productivity  and morale	while ensuring compliance  with employment	law. Here’s a practical guide on how employers should manage short-term sickness absence</p>
            </div>
            <div className={chatDetailsList}>
              <h1 className={topicHeadingBottom}>Developing a Clear Absence Policy</h1>
              <p>Set Clear Reporting Requirements Define how and by when an absence should be reported, specifying who the employee should contact Establish Attendance Standards Outline acceptable levels of attendance and there consequences of failing </p>
            </div>
            <div className={chatDetailsList}>
              <h1 className={topicHeadingBottom}>Form to record short-term sickness absence return-to-work meeting</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac tincidunt urna, a finibus odio. Nullam vel ultrices dui. Integer dapibus lectus vel ante accumsan, ut pretium lectus dignissim. Nullam aliquet leo neque, vel lacinia lorem ornare id. Phasellus rhoncus est ut eros blandit vulputate. Proin mattis, libero finibus facilisis efficitur, nibh diam auctor est, eu placerat lacus mauris fringilla libero. Quisque purus est, laoreet vel luctus ac, consequat eget dolor. Aenean id arcu in mauris tempus rutrum vitae eu neque. Nulla libero lorem, feugiat non feugiat eget, varius nec lectus. Quisque at ligula ligula. Suspendisse potenti. Proin consectetur consequat nulla, malesuada posuere lacus rutrum quis. Morbi egestas dui id neque vestibulum, quis venenatis diam euismod. Integer erat nibh, volutpat iaculis ex in, sollicitudin tincidunt turpis. Pellentesque auctor viverra mauris eu posuere.</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Quickpromptslist;