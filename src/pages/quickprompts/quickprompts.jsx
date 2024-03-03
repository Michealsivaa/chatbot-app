import { useState, useRef } from 'react';
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
import chatIcon from '../../images/chat-icon.jpg'



const TopicArea = () => {
  const { topicHeading, hrAdviceTitle, topicAreaSectionTop, topicAreaSection, topicActive, selectSource, advancedPrompt, uploadSection, chatboxSection, chatboxRowTop, chatboxRow, homePageTop, topicAreaButton, topicAreaInnerList, paginationSection, previous, next, promptSection, faqHeading, promptSectionBotton, topicHeadingBottom, chatDetailsList, chatDetailsListBottom, homePageTopBottom } = useStyles();
  const [isActive, setIsActive] = useState(false);

  const { selectRadio, setSelectedRadio } = useContext(MyContextApi);

  const [selectedOption, setSelectedOption] = useState('');

  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef(null);


  const faqPrompt = [
    { id: 1, faq: 'How should employers manage shot-term sickness absence on a day-to-day basis?' },
    { id: 2, faq: 'Why is it good practice to conduct return-to-work interviews every time an employee has had a day or two off work?' },
    { id: 3, faq: 'In what circumstances might an employer need to obtain a medcal report on an employee?' },
    { id: 4, faq: 'Can an employer issue a warning to an employee for poor attendance, even where there are genuine reason for their absences?' },
  ];
  const model = [
    { id: 1, faq: 'Short-term sickness absence policy' },
    { id: 2, faq: 'Absence record form' },
    { id: 3, faq: 'Form to record short-term sickness absence return-to-work meeting' },
    { id: 4, faq: 'Letter confirming when has been agreed following short-term sickness absence return-to-work meeting' },
    { id: 5, faq: `Letter ot employee's own docker/consultant requesting medical report (frewurny short-term sickness absences)` },

  ];
  const handleClick = (event, id) => {
    setIsActive(id);
  };


  const handleOptionChange = (event) => {
    setSelectedRadio(event.target.value);
    setShowContent(true);
    // Scroll to the revealed content
    // contentRef.current.scrollIntoView({ behavior: 'smooth' });

  };




  return (
    <>
      {!showContent ? (
        <div>
          <Grid container className={homePageTop}>
            <Grid item xs={12}>
              <CustomButton customButtonClass={topicAreaButton} name={'Absense Management'} />
              <div className={promptSection}>
                <h1 className={topicHeading}>Deal with a case of persistent short-term sickness absenses</h1>
                <Grid container>
                  <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <div className={faqHeading}>Select an FAQ Prompt</div>
                    <Grid container direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      className={topicAreaSectionTop}>
                      <FormControl component="fieldset">
                        <RadioGroup aria-label="options" name="options" value={selectRadio} onChange={handleOptionChange}>
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
                    <div className={faqHeading}>Select a model document Prompt</div>
                    <Grid container direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      className={topicAreaSectionTop}>
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
            <Grid item xs={12} className={chatboxRowTop}>
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
        </div>
      ) : (
        <div>
          <Grid container className={homePageTopBottom}>
            <Grid item xs={12}>
              <CustomButton customButtonClass={topicAreaButton} name={'Absense Management'} />
              <div className={promptSection}>
                <h1 className={topicHeading}>Deal with a case of persistent short-term sickness absenses</h1>
                <Grid container>
                  <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <div className={faqHeading}>Select an FAQ Prompt</div>
                    <Grid container direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      className={topicAreaSection}>
                      <FormControl component="fieldset">
                        <RadioGroup aria-label="options" name="options" value={selectRadio} onChange={handleOptionChange}>
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
                    <div className={faqHeading}>Select a model document Prompt</div>
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
              <SearchBox rows={4} searchInput={chatboxSection} selectedOption={selectedOption} />
            </Grid>
          </Grid>
          <div className={promptSectionBotton}>
            <Grid container sx={{ padding: '24px' }}>
              <Grid item xs={1}>
                <img src={chatIcon} />
              </Grid>
              <Grid item xs={11}>
                <div className={chatDetailsListBottom}>
                  <h1 className={topicHeadingBottom}>Managing Short-Term Sickness Absence</h1>
                  <p>Employers must manage short-term sickness absence with a fair and consistent approach to maintain productivity  and morale	while ensuring compliance  with employment	law. Here’s a practical guide on how employers should manage short-term sickness absence</p>
                </div>
                <div className={chatDetailsListBottom}>
                  <h1 className={topicHeadingBottom}>Developing a Clear Absence Policy</h1>
                  <p>Set Clear Reporting Requirements Define how and by when an absence should be reported, specifying who the employee should contact Establish Attendance Standards Outline acceptable levels of attendance and there consequences of failing </p>
                </div>
                <div className={chatDetailsListBottom}>
                  <h1 className={topicHeadingBottom}>Form to record short-term sickness absence return-to-work meeting</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac tincidunt urna, a finibus odio. Nullam vel ultrices dui. Integer dapibus lectus vel ante accumsan, ut pretium lectus dignissim. Nullam aliquet leo neque, vel lacinia lorem ornare id. Phasellus rhoncus est ut eros blandit vulputate. Proin mattis, libero finibus facilisis efficitur, nibh diam auctor est, eu placerat lacus mauris fringilla libero. Quisque purus est, laoreet vel luctus ac, consequat eget dolor. Aenean id arcu in mauris tempus rutrum vitae eu neque. Nulla libero lorem, feugiat non feugiat eget, varius nec lectus. Quisque at ligula ligula. Suspendisse potenti. Proin consectetur consequat nulla, malesuada posuere lacus rutrum quis. Morbi egestas dui id neque vestibulum, quis venenatis diam euismod. Integer erat nibh, volutpat iaculis ex in, sollicitudin tincidunt turpis. Pellentesque auctor viverra mauris eu posuere.</p>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      )}
    </>
  )
}

export default TopicArea