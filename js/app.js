const moviesData = [
    {
        id: 1,
        title: "Thanh Dao Không Muốn Làm Sát Thủ",
        year: 2026,
        genres: ["Hành động"],
        poster: "images/1.jpg",
        country: "Trung Quốc",
        cast: "Denzel Washington, Rihanna, Karl Urban",
        description: "Một tàu quân sự bị tấn công bởi một thế lực bí ẩn dưới biển. Đội hải quân phải chiến đấu để cứu ngôi nhà của họ.",
        rating: 8.2
    },
    {
        id: 2,
        title: "Tình Yêu Không Thể Nói Thành Lời",
        year: 2025,
        genres: ["Hành động", "Giật gân", "Thảm kịch"],
        poster: "images/2.jpg",
        country: "Sha Mo",
        cast: "Trung quốc",
        description: "Bộ phim xoay quanh cuộc sống của Tiểu Mã (Trương Nghệ Hưng thủ vai) một người cha khiếm thính sống cùng con gái Mộc Mộc. Trong suốt thời thơ ấu, Mộc Mộc trở thành cầu nối giúp cha giao tiếp và hòa nhập với xã hội. Tuy nhiên, khi cô bé trưởng thành, mong muốn được bước ra thế giới bình thường của người nghe khiến mối quan hệ cha con bắt đầu đối diện với khoảng cách và mâu thuẫn. Một biến cố bất ngờ xảy ra, buộc cả hai phải đưa ra những lựa chọn quan trọng để tìm lại nhau",
        rating: 9.9
    },
    {
        id: 3,
        title: "Xà Nữ",
        year: 2025,
        genres: ["Hành động", "Kinh dị", "Khoa học viễn tưởng"],
        poster: "images/3.jpg",
        country: "Trung Quốc",
        cast: "Tejasswi Prakash, Mouni Roy",
        description: " Tại một thị trấn Đông Nam Á, rừng thiêng đồn đại có Xà Nữ nuốt chửng kẻ dám xâm phạm. Ông trùm xưởng rắn Xà Gia bất chấp cảnh báo, tự mình dẫn đoàn vào rừng và gặp phải sự tấn công của Xà Nữ. Anh trai Trần Sổ hy sinh thảm khốc trong chuyến đi này. Để thay anh trai bái thù, Trần Sổ gia nhập đội của Xà Gia, lại lần nữa vào núi, hiểm nguy rình rập.",
        rating: 9.8
    },
    {
        id: 4,
        title: "Avatar: Dòng chảy của nước",
        year: 2022,
        genres: ["Khoa học viễn tưởng", "Phiêu lưu", "Tình cảm"],
        poster: "images/4.jpg",
        country: "Mỹ",
        cast: "Sam Worthington, Zoe Saldana, Stephen Lang",
        description: "Một quân nhân bị tàn tật được gửi tới hành tinh Pandora và ở đó phải đối mặt với những quyết định khó khăn.",
        rating: 9.2
    },
    {
        id: 5,
        title: "Còn Ra Thể Thống Gì Nữa?",
        year: 2026,
        genres: ["Lãng mạn", "Tình cảm", "Kỳ ảo"],
        poster: "images/5.jpg",
        country: "Trung Quốc",
        cast: " Vương Sở Nhiên, Thừa Lỗi, Đường Hiểu Thiên, Hồ Ý Hoàn",
        description: "Còn Ra Thể Thống Gì Nữa? là bộ phim chuyển thể đầy kịch tính, theo chân Vương Thúy Hoa, một gà mờ công sở vô tình xuyên không vào tiểu thuyết cùng tên.Tại thế giới mới này, cô gặp gỡ Trương Tam, một kẻ xuyên không bí ẩn khác.Cả hai, với lợi thế nắm giữ kịch bản tương lai, đã bắt tay lập mưu để sinh tồn, đối phó với hàng loạt thử thách khắc nghiệt và bảo vệ bản thân khỏi số phận nghiệt ngã đã định sẵn.",
        rating: 9.0
    },
    {
        id: 6,
        title: "Từ Hôm Nay, Tôi Là Con Người",
        year: 2026,
        genres: ["Giật gân", "Tình cảm"],
        poster: "images/6.jpg",
        country: "Hàn Quốc",
        cast: "Kim Hye Yoon, Lomon, Jang Dong Joo, Lee Si Woo",
        description: "Từ Hôm Nay, Tôi Là Con Người xoay quanh Eun Ho (Kim Hye Yoon), một hồ ly chín đuôi sống bằng nghề ban điều ước. Trải qua hàng trăm năm tu luyện để trở thành con người, Eun Ho bất ngờ đưa ra lựa chọn ngược lại: cô quyết định không muốn làm người nữa, mà chọn một cuộc sống được kiểm soát chặt chẽ, không cảm xúc, không ràng buộc.",
        rating: 9.0
    },
    {
        id: 7,
        title: "Hoa Máu",
        year: 2026,
        genres: ["Tình cảm", "Tâm lý"],
        poster: "images/7.jpg",
        country: "Hàn Quốc",
        cast: "Ryeo Un, Sung Dong Il, Keum Sae Rok, Shin Seung Hwan, Jung So Ri",
        description: "Hoa Máu đưa khán giả vào thế giới đầy u ám của Lee U Gyeom, một kẻ sát nhân hàng loạt bí ẩn nhưng lại nắm giữ công nghệ y học đột phá có khả năng cứu sống vô số người.Bộ phim xoay quanh cuộc đối đầu cân não giữa một luật sư đang tuyệt vọng tìm mọi cách để cứu đứa con mắc bệnh hiểm nghèo của mình, và một công tố viên kiên quyết đòi hỏi công lý cho những nạn nhân của Lee U Gyeom.",
        rating: 8.1
    },
    {
        id: 8,
        title: "Điều Tra Viên Hong",
        year: 2026,
        genres: ["Tình cảm", "Giật gân"],
        poster: "images/8.jpg",
        country: "Hàn Quốc",
        cast: "Park Shin Hye, Go Kyung Pyo, Ha Yoon Kyung",
        description: "Điều Tra Viên Hong là một nữ điều tra viên tài ba, luôn hết mình vì công lý. Cô được giao nhiệm vụ tối mật: thâm nhập vào Tập đoàn Chứng khoán Đại Việt, nơi đang dấy lên nghi vấn về hoạt động rửa tiền và tham nhũng quy mô lớn. Cô khéo léo cải trang thành một nhân viên bình thường, cẩn trọng thu thập bằng chứng từ bên trong.",
        rating: 7.5
    },
    {
        id: 9,
        title: "Đường Quỷ Kỳ Án",
        year: 2026,
        genres: ["Hành động", "Giật gân"],
        poster: "images/9.jpg",
        country: "Trung Quốc",
        cast: " Trương Dật Kiệt, Quản Nhạc, Hầu Trình Nguyệt, Lưu Vận Hàm, Hạ Cương Cao, Ngô Xuân Di",
        description: "Đường Quỷ Kỳ Án là một bộ phim trinh thám cổ trang đưa khán giả lạc vào kinh thành Trường An thời Đường Khai Nguyên thịnh thế, nơi vẻ ngoài phồn hoa rực rỡ ẩn chứa vô vàn bí ẩn và những vụ án ly kỳ, rùng rợn. Giữa bức tranh đô thị lộng lẫy, thám tử chốn dân gian Thân Đồ Bách Kỳ đã hợp tác cùng Thiếu khanh Đại Lý Tự Nghiêu Viễn và Mục Quy Đề để vén màn những tội ác tưởng chừng siêu nhiên.",
        rating: 6.5
    },
    {
        id: 10,
        title: "Thanh Gươm Diệt Quỷ: Vô Hạn Thành",
        year: 2025,
        genres: ["Hoạt hình", "Hành động", "Phiêu lưu"],
        poster: "images/10.jpg",
        country: "Nhật Bản",
        cast: "Natsuki Hanae, Akari Kito, Hiro Shimono",
        description: "Phần phim điện ảnh tiếp theo về cuộc chiến khốc liệt của Sát Quỷ Đoàn bên trong pháo đài vô tận của quỷ vương Muzan.",
        rating: 8.4
    },
    {
        id: 11,
        title: "Phong Dữ Triều (Silent Tides)",
        year: 2025,
        genres: ["Tình cảm", "Lãng mạn"],
        poster: "images/11.jpg",
        country: "Trung Quốc",
        cast: "Đang cập nhật",
        description: "Câu chuyện tình yêu đầy trắc trở giữa bối cảnh xã hội hiện đại, nơi những bí mật quá khứ dần được hé lộ qua từng đợt sóng triều.",
        rating: 9.2
    },
    {
        id: 12,
        title: "Lưỡi Hái Tử Thần: Huyết Thống",
        year: 2025,
        genres: ["Kinh dị", "Giật gân"],
        poster: "images/12.jpg",
        country: "Mỹ",
        cast: "Tony Todd, Brea Grant",
        description: "Phần mới nhất của loạt phim kinh dị nổi tiếng, khi thần chết tiếp tục săn đuổi những kẻ may mắn sống sót sau một thảm họa tàn khốc.",
        rating: 9.8
    }
];

let filteredMovies = [...moviesData];
let selectedGenres = new Set();
let searchQuery = '';
let searchTimeout;

const moviesContainer = document.getElementById('moviesContainer');
const genreFilter = document.getElementById('genreFilter');
const searchInput = document.getElementById('searchInput');
const resetFiltersBtn = document.getElementById('resetFilters');
const themeToggle = document.getElementById('themeToggle');
const movieModal = document.getElementById('movieModal');
const closeModalBtn = document.getElementById('closeModal');

function initApp() {
    loadThemePreference();
    generateGenreCheckboxes();
    displayMovies(moviesData);
    attachEventListeners();
}

function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        updateThemeToggleIcon();
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateThemeToggleIcon();
}

function updateThemeToggleIcon() {
    const icon = document.querySelector('.toggle-icon');
    const isDarkMode = document.body.classList.contains('dark-mode');
    icon.textContent = isDarkMode ? '☀️' : '🌙';
}

function generateGenreCheckboxes() {
    const allGenres = new Set();
    moviesData.forEach(movie => {
        movie.genres.forEach(genre => allGenres.add(genre));
    });

    const sortedGenres = Array.from(allGenres).sort();

    genreFilter.innerHTML = '';
    sortedGenres.forEach(genre => {
        const checkboxDiv = document.createElement('div');
        checkboxDiv.className = 'genre-checkbox';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `genre-${genre}`;
        checkbox.value = genre;
        checkbox.addEventListener('change', handleGenreFilter);

        const label = document.createElement('label');
        label.htmlFor = `genre-${genre}`;
        label.textContent = genre;

        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(label);
        genreFilter.appendChild(checkboxDiv);
    });
}

function handleGenreFilter(e) {
    const genre = e.target.value;
    if (e.target.checked) {
        selectedGenres.add(genre);
    } else {
        selectedGenres.delete(genre);
    }
    applyFilters();
}

function handleSearch(e) {
    searchQuery = e.target.value.toLowerCase().trim();

    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
        applyFilters();
    }, 300);
}

function applyFilters() {
    filteredMovies = moviesData.filter(movie => {
        const matchesGenre = selectedGenres.size === 0 ||
            movie.genres.some(genre => selectedGenres.has(genre));

        const matchesSearch = searchQuery === '' ||
            movie.title.toLowerCase().includes(searchQuery);

        return matchesGenre && matchesSearch;
    });

    displayMovies(filteredMovies);
}

function displayMovies(movies) {
    moviesContainer.innerHTML = '';

    if (movies.length === 0) {
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.innerHTML = `
            <p>Không tìm thấy phim nào phù hợp</p>
            <p style="font-size: 0.9rem;">Hãy thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
        `;
        moviesContainer.appendChild(emptyState);
        return;
    }

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <p class="movie-year">${movie.year}</p>
                <p class="movie-rating">⭐ ${movie.rating}/10</p>
            </div>
        `;

        movieCard.addEventListener('click', () => openModal(movie));
        moviesContainer.appendChild(movieCard);
    });
}

function openModal(movie) {
    document.getElementById('modalPoster').src = movie.poster;
    document.getElementById('modalTitle').textContent = movie.title;
    document.getElementById('modalYear').textContent = movie.year;
    document.getElementById('modalCountry').textContent = movie.country;
    document.getElementById('modalCast').textContent = movie.cast;
    document.getElementById('modalGenre').textContent = movie.genres.join(', ');
    document.getElementById('modalDescription').textContent = movie.description;
    document.getElementById('modalRating').textContent = movie.rating;

    movieModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    movieModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function resetFilters() {
    selectedGenres.clear();
    searchQuery = '';
    searchInput.value = '';

    document.querySelectorAll('.genre-checkbox input').forEach(checkbox => {
        checkbox.checked = false;
    });

    applyFilters();
}

function attachEventListeners() {
    searchInput.addEventListener('input', handleSearch);
    resetFiltersBtn.addEventListener('click', resetFilters);
    themeToggle.addEventListener('click', toggleTheme);
    closeModalBtn.addEventListener('click', closeModal);

    movieModal.addEventListener('click', (e) => {
        if (e.target === movieModal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && movieModal.classList.contains('active')) {
            closeModal();
        }
    });
}

document.addEventListener('DOMContentLoaded', initApp);
