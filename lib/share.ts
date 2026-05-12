export function saveAudit(id: string, data: unknown) {
  localStorage.setItem(
    `audit-${id}`,
    JSON.stringify(data)
  );
}

export function getAudit(id: string) {
  const data = localStorage.getItem(`audit-${id}`);

  if (!data) {
    return null;
  }

  return JSON.parse(data);
}