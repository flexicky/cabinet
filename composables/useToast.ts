export function useToast() {
  const message = useState<string>("app-toast-message", () => "");

  function showToast(nextMessage: string) {
    message.value = nextMessage;
  }

  function dismissToast() {
    message.value = "";
  }

  return { message, showToast, dismissToast };
}
