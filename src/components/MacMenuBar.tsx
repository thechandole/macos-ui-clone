function MacMenuBar() {
  return (
    <div className="mac-menubar">
      {/* Left Menu */}
      <div className="mac-left">
        <span className="apple"></span>
        <span className="menu active">Finder</span>
        <span className="menu">File</span>
        <span className="menu">Edit</span>
        <span className="menu">View</span>
        <span className="menu">Go</span>
        <span className="menu">Window</span>
        <span className="menu">Help</span>
      </div>

      {/* Right Status */}
      <div className="mac-right">
        <span>🔋</span>
        <span>📶</span>
        <span>🔍</span>
        <span className="time">Wed 24 Dec 3:44 PM</span>
      </div>
    </div>
  );
}

export default MacMenuBar;