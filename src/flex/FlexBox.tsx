import styled from "styled-components";
import {getPix} from "../utils/Utils";

export type FlexAlignCore = 'normal' | 'flex-start' | 'flex-end' | 'center';

export interface FlexBoxProps {
	width?: string | number;
	height?: string | number;
	flex?: string;

	justify?: FlexAlignCore | 'space-between' | 'space-around' | 'space-evenly' | string;
	align?: FlexAlignCore | string;

	direction?: 'column' | 'row' | 'row-reverse' | 'column-reverse';

	offsetTop?: string | number;
	offsetBottom?: string | number;
	offsetLeft?: string | number;
	offsetRight?: string | number;

	paddingTop?: string | number;
	paddingBottom?: string | number;
	paddingLeft?: string | number;
	paddingRight?: string | number;

	wrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | string;
}


/**
 * Flex justify items
 */
export const FXJustify = {
	center: "center",
	normal: "normal",
	spaceBetween: "space-between",
	spaceAround: "space-around",
	flexStart: "flex-start",
	flexEnd: "flex-end",
	space: "space-between",
};

/**
 * Flex Align items
 */
export const FXAlign = {
	center: "center",
	normal: "normal",
	flexStart: "flex-start",
	flexEnd: "flex-end",
};

/**
 * The flex box utility
 */
export const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  
  flex: ${p => p.flex ? p.flex : null};
  flex-wrap: ${p => p.wrap ? p.wrap : null};
  justify-content: ${p => p.justify ? p.justify : null};
  flex-direction: ${p => p.direction ? p.direction : 'row'};
  align-items: ${p => p.align ? p.align : null};


  width: ${p => getPix(p.width)};
  height: ${p => getPix(p.height)};

  margin-top: ${p => getPix(p.offsetTop)};
  margin-bottom: ${p => getPix(p.offsetBottom)};
  margin-left: ${p => getPix(p.offsetLeft)};
  margin-right: ${p => getPix(p.offsetRight)};

  padding-top: ${p => getPix(p.paddingTop)};
  padding-bottom: ${p => getPix(p.paddingBottom)};
  padding-left: ${p => getPix(p.paddingLeft)};
  padding-right: ${p => getPix(p.paddingRight)};
  
  box-sizing: border-box;
`;

