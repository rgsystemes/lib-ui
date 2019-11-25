import styled from 'styled-components'

const SidePanel = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 300px;
  transition: all 0.1s ease;
  right: ${({ show }) => show ? '0' : '-300px'};
  background-color: #f5f5f5;
`

SidePanel.defaultProps = {
  show: false,
}

export default SidePanel
