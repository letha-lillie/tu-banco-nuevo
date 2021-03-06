//buisness interface
function Account(name, balance) {
  this.name = name;
  this.balance = balance;
};

Account.prototype.Update = function() {
  return this.balance += (this.newDeposit - this.newWithdrawal);
};

function resetFields() {
  $("new-deposit").val("");
  $("new-withdrawal").val("");
}

//user interface
$(document).ready(function() {
  $("form#new-client").submit(function() {
    event.preventDefault();
    var inputtedName = $("#new-name").val();
    var initialDeposit = parseInt($("#initial-deposit").val());
    initialDeposit = initialDeposit || 0;
    var userAccount = new Account(inputtedName, initialDeposit);
    // $("#new-client").hide();
    $("#transactions").show();
    $("form#account-update").submit(function() {
      event.preventDefault();
      //grabs user deposit and withdrawal and adds a new object property "newDeposit" and "newWithdrawal"
      var deposit = parseInt($("#new-deposit").val());
      var withdrawal = parseInt($("#new-withdrawal").val());
      deposit = deposit || 0;
      withdrawal = withdrawal || 0;
      userAccount.newDeposit = deposit;
      userAccount.newWithdrawal = withdrawal;
      //runs the Adjust prototype on the userAccount to return a modified balance
      userAccount.Update();
      //adjusts user balance on the page
      $("#account-balance").text(userAccount.balance);

      resetFields();
    });
    $("#account-name").text(userAccount.name);
    $("#account-balance").text(userAccount.balance);

  });
});
