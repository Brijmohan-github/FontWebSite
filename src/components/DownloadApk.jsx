const handleDownload = (fileUrl, fileName) => {
  const downloadLink = document.createElement("a");
  downloadLink.setAttribute("download", fileName);
  downloadLink.href = fileUrl;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};

export default function DownloadApk() {
  const fileName = "stargold.apk";
  const fileUrl = "/stargold.apk";

  return (
    <section className="pt50 pb50 bg-light-gray">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 aboutIntroText">
            <h2 className="m-30px-b">DOWNLOAD BEST TicToc APPLICATION.</h2>
            <p className="text-justify md-m-20px-b">
              We are here to help you all the TicToc fanatics to get an
              exceptionally smooth experience. From beginners to masters, we
              have everything for everyone. From the basics of Satta, to
              guessing tips and tricks, we have a team of fine experts to guide
              you at each and every step of your game. We are the leading satta
              site in the industry from many years, aiming to give the fastest
              results and declaring results of almost each and every market of
              the TicToc world. Not just that we give you rate charts of
              all the numbers with helpful videos to make your experience hassle
              free.
            </p>
            <p className="text-justify">
              Wanna try your hands at Ratan Khichi? Come and join us in the
              wonderful adventure of Online Gaming, where we provide you with
              fastest online results of every bazar in the TicToc industry.
            </p>
            <button
              className="primary-btn"
              onClick={() => handleDownload(fileUrl, fileName)}
            >
              Download Now
            </button>
          </div>
          <div className="col-lg-6 text-center md-m-30px-b">
            <img
              className="img-fluid download_img1"
              src="userassests/img/Screenshot.jpg"
              alt="Showcase your app with Ratan Khichi"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
