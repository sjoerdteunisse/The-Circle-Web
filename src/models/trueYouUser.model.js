class TrueYouUser {
	// Model die een user beschrijft
        constructor(username, password, firstname, insertion, lastname, avatarUrl, description, email, country, dateOfBirth, satoshiBalance, residence, active) {
                this.username = username;
                this.password = password;
                this.firstname = firstname;
                this.insertion = insertion;
                this.lastname = lastname;
                this.avatarUrl = avatarUrl;
                this.description = description;
                this.email = email;
                this.country = country;
                this.dateOfBirth = dateOfBirth;
                this.satoshiBalance = satoshiBalance;
                this.residence = residence;
                this.active = active;
        }
}

module.exports = TrueYouUser
