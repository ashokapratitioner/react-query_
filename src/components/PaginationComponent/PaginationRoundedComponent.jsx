import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRoundedComponent({
  count,
  variant = "text",
  shape = "rounded",
  onPageChange,
}) {
  const handlePageChange = (page) => {
    onPageChange && onPageChange(page);
  };
  return (
    <Stack alignItems="center" marginTop={10} spacing={2}>
      <Pagination
        count={count}
        variant={variant}
        shape={shape}
        onChange={(_e, page) => handlePageChange(page)}
      />
    </Stack>
  );
}
