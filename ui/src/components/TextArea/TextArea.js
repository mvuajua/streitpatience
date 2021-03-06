import { element } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { COLORS, GAME_VIEWS, GRID_GAP } from '../../variables';
import ActionButton from '../ActionButton/ActionButton';

const Grid = styled.div`
  display: grid;
  grid: 1fr / 100px 1fr;
  grid-gap: ${GRID_GAP};
  min-height: 0;
`;

const FullScrollContainer = styled.div`
  background: ${COLORS.GREEN_LIGHT};
  color: white;
  min-height: 0;
  overflow: auto;
  padding: 0 ${GRID_GAP} ${GRID_GAP};
  text-align: center;

  p {
    margin-left: auto;
    margin-right: auto;
    max-width: 600px;
  }
`;

const TextArea = props => (
  <Grid>
    <ActionButton view={GAME_VIEWS.ACTION_BOARD} vertical>
      Back
    </ActionButton>

    <FullScrollContainer>{props.children}</FullScrollContainer>
  </Grid>
);

TextArea.propTypes = {
  children: element.isRequired
};

export default TextArea;
