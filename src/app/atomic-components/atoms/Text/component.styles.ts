import styled, { css } from 'styled-components'
import { IText } from './component.types'

export const StyledText = styled.p<IText>`
  margin-top: 0;

  ${({ theme, size = 'md' }) => css`
    font-size: ${theme.fontSizes?.[size]};
  `}

  ${({ theme, colorSchema = 'grey2' }) => css`
    color: ${theme.colors?.[colorSchema]};
  `}

  ${({ fontWeight = '700' }) => css`
    font-weight: ${fontWeight};
  `}

    ${({ hasMargin }) =>
    hasMargin &&
    css`
      margin-bottom: none;
    `}
`
