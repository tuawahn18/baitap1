const currentDate = new Date();

  const daysOfWeek = ['Chủ Nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
  const dayOfWeek = daysOfWeek[currentDate.getDay()];

  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; 
  const year = currentDate.getFullYear();

  const dateInfoElement = document.getElementById('dateInfo');
  dateInfoElement.textContent = `${dayOfWeek}, ngày ${day}/${month}/${year}`;


// table
function nhapThongTinVanBan() {
  var Loaivanban = prompt("Loại văn bản:");
  if (Loaivanban === null) {
      return;
  }
  
  var Tendaydu = prompt("Tên đầy đủ:");
  if (Tendaydu === null) {
      return; 
  }
  
  var Coquanbanhanh = prompt("Cơ quan ban hành:");
  if (Coquanbanhanh === null) {
      return; 
  }
  
  var Thubac = prompt("Nhập thứ bậc pháp luật:");
  if (Thubac === null) {
      return; 
  }

  var table = document.getElementById("maintable");
  var newRow = table.insertRow();

  newRow.innerHTML = `
  <td><input type='checkbox'></td>
  <td>${Loaivanban}</td>
  <td>${Tendaydu}</td>
  <td>${Coquanbanhanh}</td>
  <td>${Thubac}</td>
  <td></td>
  <td></td>
  <td></td>
  <td><button onclick="editRow(this)"><i class='bx bxs-notepad'></i></button></td>
  <td><button onclick="deleteRow(this)"><i class='bx bx-x' ></i></button></td>
`;

};

function editRow(button) {
  var row = button.parentNode.parentNode;
  var cells = row.getElementsByTagName("td");
  var Loaivanban = cells[1].textContent;
  var Tendaydu = cells[2].textContent;
  var Coquanbanhanh = cells[3].textContent;
  var Thubac = cells[4].textContent;

  var newLoaivanban = prompt("Loại văn bản:", Loaivanban);
  if (newLoaivanban !== null) {
      cells[1].textContent = newLoaivanban;
  }

  var newTendaydu = prompt("Tên đầy đủ:", Tendaydu);
  if (newTendaydu !== null) {
      cells[2].textContent = newTendaydu;
  }

  var newCoquanbanhanh = prompt("Cơ quan ban hành:", Coquanbanhanh);
  if (newCoquanbanhanh !== null) {
      cells[3].textContent = newCoquanbanhanh;
  }

  var newThubac = prompt("Nhập thứ bậc pháp luật:", Thubac);
  if (newThubac !== null) {
      cells[4].textContent = newThubac;
  }
}

function deleteRow(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}


function xoaThongTinVanBan() {
  var table = document.getElementById("maintable");
  var rows = table.getElementsByTagName("td");
  for (var i = 1; i < rows.length; i++) { // Bắt đầu từ 1 để bỏ qua hàng tiêu đề
      var checkbox = rows[i].getElementsByTagName("input")[0];
      if (checkbox.checked) {
          table.deleteRow(i);
          i--; // Giảm chỉ số i vì một hàng đã bị xoá, các hàng dưới nó sẽ di chuyển lên
      }
  }
}