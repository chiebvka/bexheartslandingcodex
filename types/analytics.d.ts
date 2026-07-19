type DataFastFunction = {
  (event: string, properties?: Record<string, unknown>): void;
  q?: IArguments[];
};

interface Window {
  datafast?: DataFastFunction;
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
}
