import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { ContainerButton } from './Components/ContainerButton';
import ButtonIconBoxStory from './Components/ButtonIconStory';
import ButtonView from './Components/ButtonView';
import { action } from '@storybook/addon-actions';
import style from './../src/Component/ModalForm/ModalForm.module.css';
import Box from '@material-ui/core/Box';
import { Grid, Container } from '@material-ui/core';
import ButtonIconBox from '../src/common/ButtonIconBox';
import ButtonBox from '../src/common/ButtonBox';
import { storiesOf } from '@storybook/react';


storiesOf('Button', module)
  .add('closeBtn', () => <ContainerButton Component={IconButton} />)
  .add('closeBtnSmall', () => <ContainerButton Component={IconButton} size={"small"} />)
  .add('closeBtnSmallRed', () => <ContainerButton Component={IconButton} size={"small"} color={"secondary"} />)
  .add('ButtonIcon', () => <ButtonIconBoxStory color={"primary"} />)
  .add('ButtonBox', () => <ButtonView text={"Hello"} variant={"contained"} />)
  .add('ButtonBoxAction', () => <ButtonView text={"exit"} onClick={action("clicked")} color={"secondary"} variant={"contained"} />)
  .add('ModalPopUp', () => <Container>
    <Box>
      <form className={style.modal}>
        <Box p={2} fontSize={24} fontWeight="fontWeightMedium" className={style.head}>
          Структура номера
                <ButtonIconBox id={"btnClose"} color={"inherit"} />
        </Box>
        
        <Box direction="row">
          <ButtonBox  variant={"contained"} color={"primary"} type={"button"} id={style.btnSave} text={"Сохранить"} />
          <ButtonBox text={"Отмена"} />
        </Box>
      </form>
    </Box>
  </Container>)