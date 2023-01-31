import { usePathname } from "next/navigation";

export default function useGetPath() {
  const pathname = usePathname();

  const pathnameWithoutLocale = pathname
    ?.split("en")
    ?.at(0)
    ?.split("pt-BR")
    .at(0);

  return pathnameWithoutLocale;
}
