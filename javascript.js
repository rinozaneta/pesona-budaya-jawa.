document.addEventListener('DOMContentLoaded', () => {
    
    // --- Variabel Global untuk Modal ---
    const modal = document.getElementById('main-modal');
    const closeButton = document.querySelector('.close-button');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const feedbackButton = document.getElementById('feedback-button');
    
    // GANTI URL DI BAWAH INI DENGAN URL IFRAME GOOGLE FORM ANDA YANG LENGKAP.
    // Pastikan menggunakan parameter ?embedded=true agar tampilan pas di dalam modal.
    const GOOGLE_FORM_EMBED_URL = "https://docs.google.com/forms/d/e/1FAIpQLScapZXrXgH15lJO8m3mRu6OKij4SmPe_gOUcMBs2-zlTNnchg/viewform?usp=header";
    
    
    // --- 1. Modal Control: Close Functions ---

    // Menutup modal saat tombol 'x' diklik
    closeButton.onclick = function() {
        modal.style.display = 'none';
    }
    
    // Menutup modal jika klik di luar area modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    
    // --- 2. Fungsi Tombol Kritik & Saran (Google Form Embed) ---
    
    feedbackButton.addEventListener('click', () => {
        modalTitle.textContent = 'Kritik dan Saran Anda';
        
        // Memuat Google Form Embed ke dalam body modal
        modalBody.innerHTML = `
            <p style="text-align: center; margin-bottom: 20px;">
                Silakan isi formulir di bawah ini. Data akan langsung tercatat di Google Drive kami.
            </p>
            <div class="google-form-wrapper">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScapZXrXgH15lJO8m3mRu6OKij4SmPe_gOUcMBs2-zlTNnchg/viewform?usp=header";
                        width="100%" 
                        height="700px" 
                        frameborder="0" 
                        marginheight="0" 
                        marginwidth="0">
                    Memuat formulir...
                </iframe>
            </div>
        `;
        
        // Menampilkan modal
        modal.style.display = 'block';
    });

    
    // --- 3. Fungsi Tombol Baca Artikel (Modal Content) ---
    
    document.querySelectorAll('.modal-trigger').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const articleId = e.target.getAttribute('data-modal-id');
            let content = '';
            let title = '';

            // Konten artikel dummy: Sesuaikan dengan konten Anda
            if (articleId === 'article-1') {
                title = 'Keris: Pusaka dan Simbol Status Sosial';
                content = `
                    <p>Keris lebih dari sekadar senjata; ia adalah representasi filosofi hidup, identitas, dan status sosial dalam budaya Jawa. Setiap lekukan (luk), pamor, dan bilah menyimpan cerita tentang pemiliknya dan kepercayaan kosmik masyarakat Jawa. Oleh UNESCO, Keris telah diakui sebagai Karya Agung Warisan Budaya Lisan dan Nonbendawi Manusia.</p>
                    <p>Dalam tradisi Jawa, keris dianggap sebagai pusaka, bukan hanya benda mati. Pembuatan keris, yang dilakukan oleh seorang Empu, melibatkan ritual dan pengetahuan mendalam tentang metalurgi dan spiritualitas. Pamor, pola unik pada bilah keris, tercipta dari campuran besi dan nikel yang ditempa berlapis-lapis. Pamor ini diyakini membawa tuah tertentu bagi pemiliknya.</p>
                `;
            } else if (articleId === 'article-2') {
                title = 'Tedhak Siten: Menapaki Langkah Kehidupan';
                content = `
                    <p>Tedhak Siten adalah upacara adat Jawa yang diselenggarakan saat anak pertama kali menginjakkan kaki ke tanah setelah berumur sekitar tujuh atau delapan bulan (hitungan penanggalan Jawa). Kata 'Tedhak' berarti menginjak, dan 'Siten' berasal dari kata 'Siti' yang berarti tanah.</p>
                    <p>Upacara ini merupakan bentuk penghormatan kepada bumi dan harapan agar anak tumbuh menjadi pribadi yang mandiri dan sukses. Serangkaian ritual dilakukan, termasuk anak dimasukkan ke dalam kurungan ayam yang berisi berbagai benda (seperti alat tulis, uang, mainan) untuk meramalkan minat dan nasib masa depannya.</p>
                `;
            } else if (articleId === 'article-3') {
                title = 'Hanacaraka: Keunikan Aksara Jawa Kuno';
                content = `
                    <p>Aksara Jawa, atau Hanacaraka, adalah salah satu sistem penulisan tradisional yang paling unik di Asia Tenggara. Aksara ini memiliki 20 karakter dasar yang membentuk sebuah kalimat puitis dan filosofis: "Hana Caraka" (Ada utusan), "Data Sawala" (Berbeda pendapat/Bertengkar), "Padha Jayanya" (Sama kuatnya), dan "Manga Bathanga" (Akhirnya mati).</p>
                    <p>Kalimat ini mengajarkan tentang siklus kehidupan, konflik, keseimbangan, dan kematian. Meskipun penggunaannya kini terbatas, Hanacaraka tetap menjadi simbol penting dari identitas dan kearifan budaya Jawa.</p>
                `;
            }

            modalTitle.textContent = title;
            modalBody.innerHTML = content;
            modal.style.display = 'block';
        });
    });
    

    // --- 4. Scroll to Top Button ---
    const scrollToTopBtn = document.getElementById('scroll-to-top');

    // Menampilkan atau menyembunyikan tombol
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Menggulir ke atas halaman dengan efek halus
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});