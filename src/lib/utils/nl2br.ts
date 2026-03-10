
export default function nl2br (str: string | null | undefined): string {
  if (str === undefined || str === null) return '';
  return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br />');
}