
// add dangerouslySetInnerHTML to the component

export default function StyledContentContainer({ htmlContent }) {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
}