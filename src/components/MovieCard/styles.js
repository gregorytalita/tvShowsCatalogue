import styled from 'styled-components'
import { animated } from "react-spring";

export const Card = styled(animated.div) `{
  flex-shrink: 0;
  width: 300px;
  height: 200px;
  border-radius: 10px;
  margin-left: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}`
