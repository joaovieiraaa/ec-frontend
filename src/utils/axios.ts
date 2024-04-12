export function generateReponse(event: any) {
  return {
    data: event.data || null,
    errors: event.data?.errors || { message: [event.data?.message] } || [],
    hasErrors:
      (event.data?.errors ? true : false) || event.status > 204 || false,
    status: event.status,
  };
}
