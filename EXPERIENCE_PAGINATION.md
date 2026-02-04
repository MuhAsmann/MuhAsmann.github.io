# Work Experience Pagination

## Overview
Saya telah menambahkan fitur pagination pada section Work Experience untuk membuat tampilan lebih rapi dan terorganisir.

## Fitur yang Ditambahkan

### 1. **Pagination Controls**
- ✅ Tombol Previous/Next dengan icon chevron
- ✅ Nomor halaman yang bisa diklik
- ✅ Active state untuk halaman saat ini
- ✅ Disabled state untuk tombol yang tidak bisa diklik
- ✅ Hover effects pada semua tombol

### 2. **Items Per Page**
- Default: **2 experience per halaman**
- Bisa diubah dengan mengubah konstanta `ITEMS_PER_PAGE`

### 3. **Page Information**
- Menampilkan informasi "Showing X-Y of Z experiences"
- Membantu user memahami posisi mereka dalam list

### 4. **Dark Mode Support**
- ✅ Semua tombol pagination support dark mode
- ✅ Active state terlihat jelas di kedua tema
- ✅ Hover effects menyesuaikan dengan tema

## Cara Kerja

### State Management
```typescript
const [currentPage, setCurrentPage] = useState(1);
```
- Menggunakan React useState untuk track halaman aktif
- Default halaman pertama (1)

### Kalkulasi Pagination
```typescript
const totalPages = Math.ceil(EXPERIENCES.length / ITEMS_PER_PAGE);
const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
const endIndex = startIndex + ITEMS_PER_PAGE;
const currentExperiences = EXPERIENCES.slice(startIndex, endIndex);
```

### Navigasi Functions
1. **goToNextPage()** - Pindah ke halaman berikutnya
2. **goToPreviousPage()** - Kembali ke halaman sebelumnya
3. **goToPage(page)** - Langsung ke halaman tertentu

## Styling

### Button States
- **Normal**: White background, gray border
- **Hover**: Light gray background
- **Active**: Blue background, white text
- **Disabled**: Opacity 50%, cursor not-allowed
- **Dark Mode**: Dark gray background, lighter borders

### Responsive Design
- Tombol dan angka halaman responsive
- Gap yang konsisten antar elemen
- Centered alignment

## Customization

### Mengubah Jumlah Items Per Page
Edit file `src/components/sections/experiences.tsx`:
```typescript
const ITEMS_PER_PAGE = 3; // Ubah dari 2 ke 3 atau angka lain
```

### Mengubah Warna Active State
Cari className pada button active:
```typescript
'border-blue-600 bg-blue-600 text-white dark:border-blue-500 dark:bg-blue-500'
```
Ganti `blue-600` dengan warna lain sesuai keinginan.

### Menyembunyikan Page Info
Hapus atau comment section "Page Info":
```typescript
{/* Page Info */}
{totalPages > 1 && (
  <div className="mt-4 text-center">
    ...
  </div>
)}
```

## Accessibility

- ✅ `aria-label` pada semua tombol
- ✅ `aria-current="page"` pada halaman aktif
- ✅ Disabled state yang jelas
- ✅ Keyboard navigation support
- ✅ Screen reader friendly

## Testing

1. Buka `http://localhost:3000`
2. Scroll ke section **Experience**
3. Lihat pagination controls di bawah experience cards
4. Test:
   - Klik nomor halaman
   - Klik tombol Previous/Next
   - Toggle dark mode
   - Resize browser untuk test responsive

## Technical Details

### Component Type
- Changed to **Client Component** (`'use client'`)
- Required untuk useState dan interactivity

### Dependencies
- `react` - useState hook
- `lucide-react` - ChevronLeft, ChevronRight icons

### Performance
- Efficient slicing of array
- No unnecessary re-renders
- Minimal state updates

## Future Enhancements

Beberapa ide untuk pengembangan lebih lanjut:
1. **Smooth scroll** ke top section saat ganti halaman
2. **URL parameters** untuk deep linking ke halaman tertentu
3. **Keyboard shortcuts** (Arrow keys untuk navigasi)
4. **Animation** saat transition antar halaman
5. **Items per page selector** (dropdown untuk pilih 2, 5, 10, dll)
6. **"Show All" button** untuk tampilkan semua experience

## Notes

- Pagination hanya muncul jika `totalPages > 1`
- Jika hanya ada 1-2 experience, pagination tidak ditampilkan
- Saat ini ada 3 experiences, jadi akan ada 2 halaman (2 + 1)

Selamat! Work experience section sekarang memiliki pagination yang clean dan functional! 🎉
