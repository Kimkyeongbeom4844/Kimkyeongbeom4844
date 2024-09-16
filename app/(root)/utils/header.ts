export function moveToId({
  id,
  scrollMarginTop,
}: {
  id: string;
  scrollMarginTop: number;
}) {
  const elem = document.getElementById(id);
  console.log(id, elem);
  if (elem !== null) {
    elem.style.scrollMarginTop = `${scrollMarginTop}px`;
    elem.scrollIntoView({
      behavior: "smooth",
    });
  }
}
