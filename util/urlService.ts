interface UrlServiceProps {
  page: number;
  search: string;
};

const UrlService = {
  execute: ({ page, search }: UrlServiceProps) => {
    return `?page=${page}${(search ? `&search=${search}` : '')}`;
  }
}

export default UrlService;
