import nProgress from "nprogress";

nProgress.configure({
  showSpinner: false,
});

export default async function useFetch(
  url,
  dataSetter,
  loadingSetter,
  errorSetter
) {
  try {
    nProgress.start();
    const response = await fetch(url);
    if (!response.ok) throw new Error(response.status);
    const data = await response.json();
    dataSetter(data);
    errorSetter(false);
  } catch (error) {
    errorSetter(true);
  } finally {
    loadingSetter(false);
    nProgress.done();
  }
}
